import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => (
    <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
    </SectionContainer>
);

Section.proptypes = {
    title: PropTypes.string.isRequired,
}