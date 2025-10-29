import { mergeClassNames } from './mergeClassNames';
import { describe, expect, it } from 'vitest';

const testClassName = 'first second third';

describe('mergeClassNames', () => {
  it('should merge all class names', () => {
    const classNames = testClassName.split(' ');
    const merged = mergeClassNames(...classNames);
    expect(merged).toBe(testClassName);
  });

  it('should ignore empty and undefined values', () => {
    const classNames = [...testClassName.split(' '), undefined, '', null];
    const merged = mergeClassNames(...classNames);
    expect(merged).toBe(testClassName);
  });
  it('should return empty', () => {
    const classNames = [undefined, null];
    const merged = mergeClassNames(...classNames);
    expect(merged).toBe('');
  });
});
