const dataUtil = {
  normalizeByTitle: data => {
    // All the process data needs to get it how you need it in the view.
    return data.allWordpressWpProjects.edges[0].node.title;
  }
};

export default dataUtil;
