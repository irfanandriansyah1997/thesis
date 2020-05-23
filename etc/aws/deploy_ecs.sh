#!/bin/bash
################################################################################
# Deploy to ECS Production
#
# Author: Adinata <mail.dieend@gmail.com>
# Author: Rifki <askrifki@gmail.com>
# Author: Egi <egi@urbanindo.com>
# Author: Mila <kamila@99.co>
################################################################################

# SET IMAGE_TAG
IMAGE_TAG=$TIMESTAMP

echo "Deploy to ecs"

pip install boto3

BASH_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
CLUSTER_NAME="thesis"
SERVICE_NAME="$1"
CONTAINER_VERSION="$1.${IMAGE_TAG}"
CONTAINER_NAME="$1"
FAMILY_TASK="$1"

echo "Deploying $1..."
python ${BASH_DIR}/etc/aws/deploy_ecs.py \
    --container-name ${CONTAINER_NAME} \
    --family-task ${FAMILY_TASK} \
    --cluster-name ${CLUSTER_NAME} \
    --service-name ${SERVICE_NAME} \
    --container-version ${CONTAINER_VERSION}