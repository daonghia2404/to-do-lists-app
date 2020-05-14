import React from "react";
import ButtonFilter from "ui/components/button/button";
import { visibilityFilter } from "action";
import { FlexboxGrid } from "rsuite";
import "./filter-button.scss";

export const FilterButton = () => {
  return (
    <FlexboxGrid
      className="filter-button"
      align="middle"
      justify="space-between"
      style={{ margin: `20px 0` }}
    >
      <FlexboxGrid.Item>
        <span>Show</span>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item>
        <FlexboxGrid>
          <ButtonFilter filter={visibilityFilter.SHOW_ALL}>All</ButtonFilter>
          <ButtonFilter filter={visibilityFilter.SHOW_ACTIVE}>
            Active
          </ButtonFilter>
          <ButtonFilter filter={visibilityFilter.SHOW_COMPLETE}>
            Complete
          </ButtonFilter>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
