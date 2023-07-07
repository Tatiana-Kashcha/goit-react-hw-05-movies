import * as s from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <s.Section>
    <s.Container>
      {title && <s.SectionTitle>{title}</s.SectionTitle>}
      {children}
    </s.Container>
  </s.Section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
};
