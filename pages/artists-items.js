function ArtistItems() {
  const itemTypes = ["painting", "sculpture", "digital", "custom"];

  const items = [
    {
      id: 1,
      title: "Meet me where the wild things grow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "painting",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1315,
      artist: "Leanne Graham",
      dateCreated: "2021-10-09T02:00:48.989Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-10T02:00:48.989Z",
      priceSold: 2030
    },
    {
      id: 2,
      title: "I choose peace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "sculpture",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 530,
      artist: "Ervin Howell",
      dateCreated: "2021-10-27T02:00:48.989Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.989Z",
      priceSold: 350
    },
    {
      id: 3,
      title: "Peace Underneath",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "digital",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 495,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-17T02:00:48.989Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.989Z",
      priceSold: 2810
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1290,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-24T02:00:48.989Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.989Z",
      priceSold: 4840,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1480,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-01T02:00:48.989Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.989Z",
      priceSold: 14730,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1305,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-09-30T02:00:48.989Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-19T02:00:48.989Z",
      priceSold: 2935,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 50,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-02T02:00:48.989Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-08T02:00:48.990Z",
      priceSold: 75,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1095,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-12T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-24T02:00:48.990Z",
      priceSold: 3465,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 600,
      artist: "Glenna Reichert",
      dateCreated: "2021-10-24T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 4220,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 855,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-04T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-28T02:00:48.990Z",
      priceSold: 4540,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 11,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 670,
      artist: "Leanne Graham",
      dateCreated: "2021-10-13T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 1940,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 975,
      artist: "Ervin Howell",
      dateCreated: "2021-10-21T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-22T02:00:48.990Z",
      priceSold: 1165,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 13,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1480,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-06T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 8270,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 995,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-12T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 6630,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 810,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-02T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-16T02:00:48.990Z",
      priceSold: 840,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 16,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 570,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-10-19T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-23T02:00:48.990Z",
      priceSold: 3660,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 17,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 105,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-24T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.990Z",
      priceSold: 765,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 18,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1270,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-24T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.990Z",
      priceSold: 1500,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1050,
      artist: "Glenna Reichert",
      dateCreated: "2021-10-16T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-23T02:00:48.990Z",
      priceSold: 3675,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1430,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-11T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-12T02:00:48.990Z",
      priceSold: 1305,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 1,
      title: "Meet me where the wild things grow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "painting",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 525,
      artist: "Leanne Graham",
      dateCreated: "2021-10-15T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-25T02:00:48.990Z",
      priceSold: 5225
    },
    {
      id: 2,
      title: "I choose peace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "sculpture",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 130,
      artist: "Ervin Howell",
      dateCreated: "2021-10-22T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-24T02:00:48.990Z",
      priceSold: 160
    },
    {
      id: 3,
      title: "Peace Underneath",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "digital",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 985,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-08T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-17T02:00:48.990Z",
      priceSold: 880
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 740,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-10T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-21T02:00:48.990Z",
      priceSold: 825,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 610,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-22T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-25T02:00:48.990Z",
      priceSold: 2255,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 970,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-10-19T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-22T02:00:48.990Z",
      priceSold: 5225,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 695,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-01T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-07T02:00:48.990Z",
      priceSold: 390,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 65,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-03T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-24T02:00:48.990Z",
      priceSold: 175,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 905,
      artist: "Glenna Reichert",
      dateCreated: "2021-09-29T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-14T02:00:48.990Z",
      priceSold: 3740,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1025,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-22T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-28T02:00:48.990Z",
      priceSold: 1670,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 11,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 380,
      artist: "Leanne Graham",
      dateCreated: "2021-10-13T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-17T02:00:48.990Z",
      priceSold: 2420,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1375,
      artist: "Ervin Howell",
      dateCreated: "2021-10-22T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.990Z",
      priceSold: 5010,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 13,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1175,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-19T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-22T02:00:48.990Z",
      priceSold: 1630,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1370,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-22T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-26T02:00:48.990Z",
      priceSold: 3655,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 395,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-03T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-17T02:00:48.990Z",
      priceSold: 2190,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 16,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1345,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-10-01T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-12T02:00:48.990Z",
      priceSold: 10595,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 17,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 955,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-28T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 1210,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 18,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 930,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-10T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 3220,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 755,
      artist: "Glenna Reichert",
      dateCreated: "2021-09-30T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-24T02:00:48.990Z",
      priceSold: 1105,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 745,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-18T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-19T02:00:48.990Z",
      priceSold: 2340,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 1,
      title: "Meet me where the wild things grow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "painting",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1095,
      artist: "Leanne Graham",
      dateCreated: "2021-10-03T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-04T02:00:48.990Z",
      priceSold: 5340
    },
    {
      id: 2,
      title: "I choose peace",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "sculpture",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 635,
      artist: "Ervin Howell",
      dateCreated: "2021-10-11T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-12T02:00:48.990Z",
      priceSold: 1550
    },
    {
      id: 3,
      title: "Peace Underneath",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      type: "digital",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 165,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-12T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-14T02:00:48.990Z",
      priceSold: 1060
    },
    {
      id: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 115,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-28T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 755,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 205,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-12T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-14T02:00:48.990Z",
      priceSold: 870,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 6,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1390,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-10-07T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-13T02:00:48.990Z",
      priceSold: 8125,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 7,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 600,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-16T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 935,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 8,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1330,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-19T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-28T02:00:48.990Z",
      priceSold: 2320,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 9,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1430,
      artist: "Glenna Reichert",
      dateCreated: "2021-10-27T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 4115,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 10,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 440,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-19T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 3535,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 11,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 455,
      artist: "Leanne Graham",
      dateCreated: "2021-10-17T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-22T02:00:48.990Z",
      priceSold: 840,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 12,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 90,
      artist: "Ervin Howell",
      dateCreated: "2021-10-14T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-27T02:00:48.990Z",
      priceSold: 115,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 13,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 545,
      artist: "Clementine Bauch",
      dateCreated: "2021-10-13T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-29T02:00:48.990Z",
      priceSold: 1620,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 14,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 510,
      artist: "Patricia Lebsack",
      dateCreated: "2021-10-02T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-21T02:00:48.990Z",
      priceSold: 5490,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 15,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 395,
      artist: "Chelsey Dietrich",
      dateCreated: "2021-10-12T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-23T02:00:48.990Z",
      priceSold: 1180,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 16,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 670,
      artist: "Mrs. Dennis Schulist",
      dateCreated: "2021-10-23T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-28T02:00:48.990Z",
      priceSold: 1935,
      title: "Fill in the blank",
      type: "custom"
    },
    {
      id: 17,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 660,
      artist: "Kurtis Weissnat",
      dateCreated: "2021-10-04T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-07T02:00:48.990Z",
      priceSold: 525,
      title: "Meet me where the wild things grow",
      type: "painting"
    },
    {
      id: 18,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1385,
      artist: "Nicholas Runolfsdottir V",
      dateCreated: "2021-10-15T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-22T02:00:48.990Z",
      priceSold: 1565,
      title: "I choose peace",
      type: "sculpture"
    },
    {
      id: 19,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 1395,
      artist: "Glenna Reichert",
      dateCreated: "2021-10-15T02:00:48.990Z",
      isPublished: true,
      isAuctioning: false,
      dateSold: "2021-10-19T02:00:48.990Z",
      priceSold: 10640,
      title: "Peace Underneath",
      type: "digital"
    },
    {
      id: 20,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
      image:
        "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
      price: 475,
      artist: "Clementina DuBuque",
      dateCreated: "2021-10-07T02:00:48.990Z",
      isPublished: false,
      isAuctioning: false,
      dateSold: "2021-10-25T02:00:48.990Z",
      priceSold: 395,
      title: "Fill in the blank",
      type: "custom"
    }
  ];

  function saveArray(arrayName, array) {
    localStorage.setItem(arrayName, JSON.stringify(array));
  }

  saveArray("myArray", items);

  console.log("Artist Items Page");

  const auctionPage = document.querySelector("#auction-container");

  const selectedArtist = localStorage.getItem("selectedArtist");

  const artistItems = items.filter(item => item.artist === selectedArtist);

  //   const itemsJSON = JSON.stringify(items);
  //   localStorage.setItem("itemsArray", itemsJSON);

  //   const JSONitems = JSON.stringify(items);
  //   localStorage.getItem("itemsArray", JSONitems);

  const artistContainer = document.querySelector(".artist-items-container");

  function editCard(card, item) {
    const cardInner = card.querySelector(".card-inner");
    const titleContainer = cardInner.querySelector(".title-container");
    const priceContainer = cardInner.querySelector(".price-container");
    const descContainer = cardInner.querySelector(".desc-container");

    const editTitle = document.createElement("input");
    editTitle.value = item.title;
    editTitle.style.backgroundColor = "transparent";
    editTitle.style.color = "#a0695f";
    editTitle.style.border = "none";
    editTitle.style.fontSize = "20px";
    editTitle.style.width = "300px";
    editTitle.style.fontFamily = "font-family: 'Roboto', sans-serif";
    titleContainer.textContent = "";
    titleContainer.appendChild(editTitle);

    const editPrice = document.createElement("input");
    editPrice.value = item.price;
    editPrice.style.backgroundColor = "transparent";
    editPrice.style.color = "#ecd5bc";
    editPrice.style.border = "none";
    editPrice.style.width = "55px";
    editPrice.style.fontSize = "18px";
    priceContainer.textContent = "$" + "";
    priceContainer.appendChild(editPrice);

    const editDesc = document.createElement("textarea");
    editDesc.textContent = item.description;
    editDesc.style.backgroundColor = "transparent";
    editDesc.style.color = "#a0695f";
    editDesc.style.border = "none";
    descContainer.textContent = "";
    descContainer.appendChild(editDesc);

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    card.querySelector(".btns").appendChild(saveButton);

    // Save button
    saveButton.addEventListener("click", () => {
      item.title = editTitle.value;
      item.price = editPrice.value;
      item.description = editDesc.value;

      titleContainer.textContent = item.title;
      priceContainer.textContent = `$${item.price}`;
      descContainer.textContent = item.description;

      card.querySelector(".btns").removeChild(saveButton);
    });
    saveButton.classList.add("saveBtn");
  }

  artistItems.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.marginTop = "50px";

    card.innerHTML = `
               <img src="${item.image}" alt="${item.title}" />
               <div class="card-inner">
               <div class="flex-container">
                   <p class="title-container">${item.title}</p>
                   <p class="price-container">$${item.price}</p>
               </div>
                   <p class="date-container">${item.dateCreated}</p>
                   <p class="desc-container">${item.description}</p>
               <br><br>
               </div>
               <div class="btns">
                   <button id="one">Send to Auction</button>
                   <button id="two">Unpublish</button>
                   <button id="three">Remove</button>
                   <button id="four">Edit</button>
               </div>
               <br><br><br> 
               `;

    const publishButton = card.querySelector("#two");
    sessionStorage.setItem("publishBtn", publishButton);
    publishButton.addEventListener("click", () => {
      const cardId = card.getAttribute("data-item-id");
      const itemToUpdate = item.find(item => item.id === parseInt(cardId)); //items

      if (itemToUpdate) {
        itemToUpdate.isPublished = !itemToUpdate.isPublished;

        if (itemToUpdate.isPublished) {
          publishButton.textContent = "Unpublish";
          localStorage.setItem("isPublished", true);
        } else {
          publishButton.textContent = "Publish";
          localStorage.setItem("isPublished", false);
        }
      }
    });

    const auctionCard = document.createElement("div");
    auctionCard.classList.add("card");
    auctionCard.style.marginTop = "100px";

    auctionCard.innerHTML = `
               <img src="${item.image}" alt="${item.title}" />
               <div class="card-inner">
               <div class="flex-container">
                   <p class="title-container">${item.title}</p>
                   <p class="price-container">$${item.price}</p>
               </div>
                   <p class="date-container">${item.dateCreated}</p>
                   <p class="desc-container">${item.description}</p>
               <br><br>
               </div>
               <div class="bid-container">
                   <input type="number" id="bid-input" placeholder="$">
                   <button id="bidBtn">Bid</button>
               </div>
               <br><br><br> 
               `;

    //send to Auction button
    const sendToAuctionBtn = card.querySelector("#one");
    sendToAuctionBtn.addEventListener("click", () => {
      item.isAuctioning = true;
      auctionPage.appendChild(auctionCard);
      localStorage.setItem("auctionItem", JSON.stringify(item));
    });

    card.setAttribute("data-item-id", item.id);

    //remove btn
    const removeButton = card.querySelector("#three");
    removeButton.addEventListener("click", () => {
      let index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        localStorage.setItem("removed: ", JSON.stringify(item));
        console.log(items.length);
        artistContainer.removeChild(card);
      }
    });

    //edit btn
    const editButton = card.querySelector("#four");
    editButton.addEventListener("click", () => {
      editCard(card, item);
      editButton.style.display = "none";
    });

    artistContainer.appendChild(card);
  });

  const artistItemsPage = document.querySelector("#artist-items-page");
  artistItemsPage.classList.remove("position");
  const fullscreenDiv = document.querySelector(".fullscreenDiv");
  const closeBtn = document.querySelector("#cancel-btn");
  const showBtn = document.querySelector("#show");
  showBtn.addEventListener("click", () => {
    fullscreenDiv.style.display = "block";
    artistItemsPage.classList.add("position");
    closeBtn.style.display = "block";

    closeBtn.addEventListener("click", () => {
      fullscreenDiv.style.display = "none";
      artistItemsPage.classList.remove("position");
    });
  });

  // add button
  const addNewItemBtn = document.querySelector("#addNewItem-btn");
  addNewItemBtn.addEventListener("click", () => {
    const title = document.querySelector("#addTitle").value;
    const price = document.querySelector("#addPrice").value;
    const description = document.querySelector("#descriptionArea").value;
    const img = document.querySelector("#addImg").value;
    const checkInput = document.querySelector("#check").checked;

    const newItem = {
      id: items.length + 1,
      title: title,
      description: description,
      type: "",
      image: img,
      price: price,
      artist: selectedArtist,
      dateCreated: new Date().toLocaleDateString(),
      isPublished: checkInput,
      isAuctioning: false,
      dateSold: "",
      priceSold: 0
    };

    items.push(newItem);
    localStorage.setItem("added new item:", JSON.stringify(newItem));
    localStorage.getItem("itemsArray", JSON.stringify(items));

    const card = createCard(newItem);
    artistContainer.appendChild(card);

    document.querySelector("#addTitle").value = "";
    document.querySelector("#addPrice").value = "";
    document.querySelector("#addPrice").value = "";
    document.querySelector("#addImg").value = "";
    document.querySelector("#descriptionArea").value = "";
    fullscreenDiv.style.display = "none";

    // edit button
    // const editButton = card.querySelector("#four");
    // editButton.addEventListener("click", () => {
    //   editCard(card, newItem);
    //   editButton.style.display = "none";
    // });
  });

  function createCard(item) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.marginTop = "50px";

    card.innerHTML = `
     <img src="${item.image}" alt="${item.title}" />
        <div class="card-inner">
            <div class="flex-container">
                <p class="title-container">${item.title}</p>
                <p class="price-container">$${item.price}</p>
            </div>
            <p class="date-container">${item.dateCreated}</p>
            <p class="desc-container">${item.description}</p>
            <br><br>
        </div>
        <div class="btns">
            <button id="one">Send to Auction</button>
            <button id="two">Unpublish</button>
            <button id="three">Remove</button>
            <button id="four">Edit</button>
        </div>
        <br><br><br>
  `;

    return card;
  }
}
