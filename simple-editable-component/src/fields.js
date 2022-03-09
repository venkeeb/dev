const fieldsArr = [
    {
      label: "User Name",
      name: "name",
      validation: e => {
        const name = e.target.value;
        if (name.length > 15) {
          return false;
        } else {
          return true;
        }
      },
      error: "Enter a User Name"
    },
    {
      label: "City",
      name: "city",
      validation: e => {
        const name = e.target.value;
        if (name.length > 15) {
          return false;
        } else {
          return true;
        }
      },
      error: "Enter a City"
    }
  ];

  export default fieldsArr;
  