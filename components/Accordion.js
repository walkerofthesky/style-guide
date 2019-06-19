import React from 'react';
import styled from 'styled-components';

const StyledAccordion = styled.div`
  border: 1px solid #aaa;
  border-radius: 4px;
  margin: 0 auto;
  max-width: 800px;
`;

const AccordionFold = styled.div`
  h2 {
    background: ${props => (props.expanded ? 'transparent' : '#eee')};
    border-bottom: ${props => (props.expanded ? '0' : '1px solid #ccc')};
    margin: 0;
    padding: 16px;
  }

  p {
    border-bottom: 1px solid #ccc;
    margin: 0;
    padding: 24px 16px;
  }

  :last-child {
    h2,
    p {
      border-bottom: 0;
    }
  }

  .content {
    max-height: ${props => (props.expanded ? '500px' : 0)};
    overflow: hidden;
    transition: max-height 300ms cubic-bezier(0.42, 0, 0.034, 1.1);
  }
`;

const Accordion = ({ expandedFold, folds }) => {
  return (
    <StyledAccordion>
      {folds.map(fold => (
        <AccordionFold expanded={expandedFold === fold.id} key={fold.id}>
          <h2>{fold.title}</h2>
          <div className="content">
            <p>{fold.text}</p>
          </div>
        </AccordionFold>
      ))}
    </StyledAccordion>
  );
};

export default Accordion;
