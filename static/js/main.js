(function () {
  "use strict";
  interact(".iframe-wrap")
    .resizable({
      edges: {
        top: false, // Use pointer coords to check for resize.
        left: false, // Disable resizing from left edge.
        bottom: false, // Resize if pointer target matches selector
        right: true, // Resize if pointer target is the given Element
      },
      modifiers: [
        // minimum size
        interact.modifiers.restrictSize({
          min: {
            width: 336,
          },
          max: {
            width: 1500,
          },
        }),
      ],
    })
    .on("resizemove", (event) => {
      let { x, y } = event.target.dataset;

      x = parseFloat(x) || 0;
      y = parseFloat(y) || 0;

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `translate(${event.deltaRect.left}px, ${event.deltaRect.top}px)`,
      });

      Object.assign(event.target.dataset, { x, y });
    });

  iFrameResize({
    log: true,
  });
})();
