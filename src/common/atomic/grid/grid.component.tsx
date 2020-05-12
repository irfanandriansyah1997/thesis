import GridRowComponent from './grid-row.component';
import GridColumnComponent from './grid-column.component';
import GridContainerComponent from './grid-container.component';
import { GridDefaultExportInterface } from './interface/component.interface';

const GridComponent: GridDefaultExportInterface = {
    Row: GridRowComponent,
    Column: GridColumnComponent,
    Container: GridContainerComponent
};

export default GridComponent;
