import '@testing-library/jest-dom';

// jsdom does not implement IntersectionObserver; provide a minimal stub so
// framer-motion's whileInView / viewport features don't throw in tests.
if (typeof IntersectionObserver === 'undefined') {
  class IntersectionObserverStub {
    readonly root: Element | null = null;
    readonly rootMargin: string = '0px';
    readonly thresholds: ReadonlyArray<number> = [];
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverStub,
  });
  Object.defineProperty(global, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserverStub,
  });
}
