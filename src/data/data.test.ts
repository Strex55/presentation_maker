import { describe, expect, it } from '@jest/globals';
import { changePresentationTitle } from './data';
import { presentation } from './mock';

describe('changePresentationTitle', () => {
    it('should set new title to the presentation', () => {
        // Arrange
        const newTitle = 'Nikita\'s presentation';

        // Act
        const newPresentation = changePresentationTitle(presentation, newTitle);

        // Assert
        expect(newPresentation.title).toBe(newTitle);
    });

    it('should reset new title of the presentation', () => {
        // Arrange
        const newTitle = '';

        // Act
        const newPresentation = changePresentationTitle(presentation, newTitle);

        // Assert
        expect(newPresentation.title).toBe(newTitle);
    });
});

// npm test data.test.ts