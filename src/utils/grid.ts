import { IServerSideSelectionState } from 'ag-grid-community';
import { GridApi } from 'ag-grid-community';
import { MutableRefObject } from 'react';

export const getServerSideGridSelection = (
  gridRef: MutableRefObject<GridApi>,
  propertyName: string,
) => {
  const selectionState =
    gridRef.current.getServerSideSelectionState() as IServerSideSelectionState;

  let ids = [];
  if (selectionState.selectAll) {
    gridRef.current.forEachNode(node => {
      if (
        !selectionState.toggledNodes.includes(
          node.data[propertyName].toString(),
        ) &&
        node.selectable
      ) {
        ids.push(node.data[propertyName]);
      }
    });
  } else {
    const selectedNodes = gridRef.current.getSelectedNodes();
    selectedNodes.forEach(node => {
      ids.push(node.data[propertyName]);
    });
  }
  return ids;
};
