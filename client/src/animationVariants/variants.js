const loginVariants = {
    initial: {
      opacity: 0,
      x: "100vh",
      scale: 1.2
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vh",
      scale: 1.2
    }
  };
  const registerVariants = {
    initial: {
      opacity: 0,
      x: "100vh",
      scale: 1.1
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vh",
      scale: 1.1
    }
  };
export  {loginVariants,registerVariants}