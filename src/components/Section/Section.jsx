import * as s from './Section.styled';
// import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <s.Container>
      <s.SectionTitle>{title}</s.SectionTitle>
      {children}
    </s.Container>
  </section>
);

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.any.isRequired,
// };
