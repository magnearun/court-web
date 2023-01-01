import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const DatePickerStyles = createGlobalStyle`
.react-datepicker {
  background: white;
  line-height: 1.125em;
  padding: 1em;
  border: none;
  color: #454647;
  border-radius: 0;

}
.react-datepicker__day-names, .react-datepicker__week, .react-datepicker__navigation-wrapper {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-content: space-between;
}

.react-datepicker__day {
    min-height: 40px;
  min-width: 40px;
  width: 100%;
  padding: .5em;
  margin: 0;

  font-size: 12px;
  font-weight: 300;
  color: ${(props) => props.theme.palette.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
}

.react-datepicker__day-name {
    min-height: 40px;
  min-width: 40px;
  width: 100%;
  padding: .5em;
  margin: 0;

  font-size: 12px;
  color: ${(props) => props.theme.palette.text.primary};
}

.react-datepicker__header.react-datepicker__header--custom {
    background: none;
    border: none;
    padding: 0;
}

.react-datepicker__day {
    min-height: 40px;
    min-width: 40px;
    padding: 0.5em;
    margin: 0;
    font-size: 12px;
    color: ${(props) => props.theme.palette.text.primary};
    border: 2px solid transparent;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    background-color: ${({ theme }) => theme.palette.primary.light};
    border: 2px solid;
  border-color: ${(props) => props.theme.palette.primary.main};
  color:  ${(props) => props.theme.palette.primary.main};
  font-weight: 600;
}

.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  border-radius: 0.3rem;
  background-color: white
  border-color: ${(props) => props.theme.palette.primary.main};
  color:  ${(props) => props.theme.palette.primary.main};
  font-weight: 600;
}
.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
    border-radius: 0.3rem;
  background-color: white;
  color: ${(props) => props.theme.palette.text.primary};

}

.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  background-color: ${(props) => props.theme.palette.primary.light};
  border-radius: 0.3rem;
  color: ${(props) => props.theme.palette.text.primary};
}


.react-datepicker__day--disabled {
  pointer-events: none;
  opacity: 0.3;

  &:hover {
    border-radius: 0;
    background-color: white;
  }
}

.react-datepicker__day--excluded {
  pointer-events: none;
  color: grey;
  text-decoration: line-through;

  &:hover {
    border-radius: 0;
    background-color: white;
  }
}
`;
