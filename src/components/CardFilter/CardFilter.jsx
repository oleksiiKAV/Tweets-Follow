import { useState } from 'react';
import PropTypes from 'prop-types';
import { statusFilters } from "../../helpers/filter";
import { TbAdjustmentsAlt } from 'react-icons/tb';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownList,
  DropDownListContainer,
  ListItem,
  Main,
} from './CardFilter.styled';

export const CardFilter = ({ handleFilterChange, resetPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          Filter <TbAdjustmentsAlt />
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {Object.keys(statusFilters).map(el => (
                <ListItem
                  key={Math.random()}
                  type="button"
                  onClick={() => {
                    handleFilterChange(el);
                    setIsOpen(false);
                    resetPage(1);
                  }}
                >
                  {el}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Main>
  );
};

CardFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
};
