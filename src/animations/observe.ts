interface props {
  item: any;
  options: any;
}

export const IO = (item: any, options: any) => {
  return new Promise<void>((resolve) => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resolve();
        }
      });
    }, options);
    observer.observe(item);
  });
};
