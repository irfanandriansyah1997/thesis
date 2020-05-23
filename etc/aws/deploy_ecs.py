#!/usr/bin/env python
###############################################################################
# Deploy ECS for Prod, Beta, and Alpha
#
# Author: Adinata <mail.dieend@gmail.com>
# Author: Rifki <askrifki@gmail.com>
#
###############################################################################

import argparse
import boto3
import os

parser = argparse.ArgumentParser(description='Deploy new version of container to service')

parser.add_argument('--container-name',
                    required=True,
                    dest='container_name',
                    help='Container to be updated in task definition')
parser.add_argument('--container-version',
                    required=True,
                    dest='container_version',
                    help='New container version')
parser.add_argument('--family-task',
                    dest='family_task',
                    required=True,
                    help='Task family name to be updated')
parser.add_argument('--cluster-name',
                    dest='cluster_name',
                    required=True,
                    help='Service name to be updated')
parser.add_argument('--service-name',
                    dest='service_name',
                    required=True,
                    help='Service name to be updated')
parser.add_argument('--include-service-on-tag',
                    dest='service_on_tag',
                    required=False,
                    default=False,
                    help='Boolean, is tag include service name')

args = parser.parse_args()


def update_container_task_definition(definition, container_name, new_version, service_name=None):
    for container_definition in definition['containerDefinitions']:
        if container_definition['name'] == container_name:
            (image_name, image_version) = container_definition['image'].split(':')
            if service_name is None:
                container_definition['image'] = '%s:%s' % (image_name, new_version)
            else:
                container_definition['image'] = '%s:%s.%s' % (image_name, service_name, new_version)
            print("Updating container image using %s" % container_definition['image'])
    return definition

client = boto3.client('ecs',
                      aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
                      aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY'],
                      region_name='ap-southeast-1'
                      )


latest_version = client.list_task_definitions(
    familyPrefix=args.family_task,
    sort='DESC',
    maxResults=1
)['taskDefinitionArns'][0].split('/')[-1]

if args.service_on_tag:
    task_definition = update_container_task_definition(
        client.describe_task_definition(taskDefinition=latest_version)['taskDefinition'],
        args.container_name,
        args.container_version,
        args.service_name
    )
else:
    task_definition = update_container_task_definition(
        client.describe_task_definition(taskDefinition=latest_version)['taskDefinition'],
        args.container_name,
        args.container_version
    )

response = client.register_task_definition(
    family=task_definition['family'],
    containerDefinitions=task_definition['containerDefinitions'],
    volumes=task_definition['volumes']
)
print("Task definition for %s.%s updated. Current revision: %s." %
      (args.family_task, args.container_name, response['taskDefinition']['revision']))

client.update_service(
    cluster=args.cluster_name,
    service=args.service_name,
    taskDefinition=response['taskDefinition']['taskDefinitionArn']
)

print("Service %s.%s updated." % (args.cluster_name, args.service_name))