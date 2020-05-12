import React from 'react';
import { render, mount } from 'enzyme';

import Grid from '../grid.component';

describe('Testing Grid in atomic component ', () => {
    it('Should render container component correctly', () => {
        const grid = render(<Grid.Container>Card content</Grid.Container>);

        expect(grid.hasClass('ui-container')).toBe(true);
    });

    it('Should render container, row and column component correctly', () => {
        const grid = mount(
            <Grid.Container>
                <Grid.Row>
                    <Grid.Column id="id-1234">
                        Render With Grid Row and Grid Column
                    </Grid.Column>
                    <div className="ui-col">
                        Render Without Grid Row and Grid Column
                    </div>
                </Grid.Row>
                <div className="ui-row">
                    <Grid.Column id="id-1235">
                        Render Without Grid Row
                    </Grid.Column>
                </div>
            </Grid.Container>
        );

        const row = grid.find('.ui-row').at(0);
        const column = grid.find('.ui-col').at(0);

        expect(grid.find('.ui-row').length).toBe(1);
        expect(row.text()).toBe('Render With Grid Row and Grid Column');
        expect(row.props().style).toStrictEqual({
            marginTop: -16,
            marginLeft: -16,
            marginBottom: 16,
            marginRight: -16
        });
        expect(row.props().className).toContain('flex-align-start');
        expect(row.props().className).toContain('flex-justify-start');

        expect(column.props().style).toStrictEqual({
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
            order: undefined,
            paddingBottom: 16
        });
    });

    it('Should render row with custom padding', () => {
        const grid = mount(
            <Grid.Container>
                <Grid.Row
                    padding={{
                        horizontal: 10,
                        vertical: 30
                    }}
                    align="center"
                    justify="end"
                >
                    <Grid.Column id="id-1234" order={1}>
                        Render With Grid Row
                    </Grid.Column>
                </Grid.Row>
            </Grid.Container>
        );

        const row = grid.find('.ui-row').at(0);
        const column = grid.find('.ui-col').at(0);

        expect(grid.find('.ui-row').length).toBe(1);
        expect(row.text()).toBe('Render With Grid Row');
        expect(row.props().style).toStrictEqual({
            marginTop: -15,
            marginLeft: -5,
            marginBottom: 15,
            marginRight: -5
        });
        expect(row.props().className).toContain('flex-align-center');
        expect(row.props().className).toContain('flex-justify-end');

        expect(column.props().style).toStrictEqual({
            order: 1,
            paddingTop: 15,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 15
        });
    });

    it('Should render column with multiple viewport', () => {
        const grid = mount(
            <Grid.Container>
                <Grid.Row
                    padding={{
                        horizontal: 10,
                        vertical: 30
                    }}
                    align="center"
                    justify="end"
                >
                    <Grid.Column
                        id="id-1234"
                        order={1}
                        xs={12}
                        sm={10}
                        md={8}
                        lg={6}
                        xl={4}
                    >
                        Render With Grid Row
                    </Grid.Column>
                </Grid.Row>
            </Grid.Container>
        );

        const row = grid.find('.ui-row').at(0);
        const column = grid.find('.ui-col').at(0);

        expect(grid.find('.ui-row').length).toBe(1);
        expect(row.text()).toBe('Render With Grid Row');
        expect(row.props().style).toStrictEqual({
            marginTop: -15,
            marginLeft: -5,
            marginBottom: 15,
            marginRight: -5
        });
        expect(row.props().className).toContain('flex-align-center');
        expect(row.props().className).toContain('flex-justify-end');

        expect(column.props().style).toStrictEqual({
            order: 1,
            paddingTop: 15,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 15
        });
        expect(column.props().className).toContain('col-xs-12');
        expect(column.props().className).toContain('col-sm-10');
        expect(column.props().className).toContain('col-md-8');
        expect(column.props().className).toContain('col-lg-6');
        expect(column.props().className).toContain('col-xl-4');
    });
});
