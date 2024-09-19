const HeaderItem = () => {
  const item_collection = [
    {
      name: "Home",
      slug: "/",
    },

    {
      name: "About Us",
      slug: "/about-us",
    },

    {
      name: "Academics Programs",
      slug: "/academic-programs",
      subCat: [
        {
          service_name: "Digital Marketing",

          slug: "digital-marketing",
        },
        {
          service_name: "Mobile App Development",

          slug: "mobile-app-development",
        },
        {
          service_name: "Social Media Marketing",

          slug: "social-media-marketing",
        },
        {
          service_name: "Digital Marketing",

          slug: "digital-marketing",
        },
        {
          service_name: "Mobile App Development",

          slug: "mobile-app-development",
        },
        {
          service_name: "Social Media Marketing",

          slug: "social-media-marketing",
        },
      ],
    },
    // {
    //   name: "Resources",
    //   slug: "/about-us",
    // },
    {
      name: "Teams",
      slug: "/teams",
    },
    // {
    //   name: "Notices",
    //   slug: "/notices",
    // },
    {
      name: "Gallery",
      slug: "/gallery",
    },
    {
      name: "Blog",
      slug: "/blog",
    },
  ];
  return item_collection;
};

export default HeaderItem;
