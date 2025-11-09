import { useWindowSize } from './useWindowSize';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { act } from 'react';
import { renderHook } from '@testing-library/react';

describe('useWindowSize', () => {
  beforeEach(() => {
    // Mock the window.innerWidth and window.innerHeight
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    });
  });

  test('should return the initial window size', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toEqual({ windowWidth: 1024, windowHeight: 768 });
  });

  test('should update the window size on resize', () => {
    const { result } = renderHook(() => useWindowSize());

    act(() => {
      // Simulate a window resize
      window.innerWidth = 1280;
      window.innerHeight = 720;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toEqual({ windowWidth: 1280, windowHeight: 720 });
  });

  test('should clean up the resize event listener on unmount', () => {
    const { unmount } = renderHook(() => useWindowSize());

    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});
