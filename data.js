var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.026287147799457955,
        "pitch": 0,
        "fov": 1.3066587220423518
      },
      "linkHotspots": [
        {
          "yaw": -1.5888843352123416,
          "pitch": 0.1604568597186269,
          "rotation": 0.7853981633974483,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.02960686594953721,
        "pitch": -0.012981514373695546,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -2.1285504888911024,
          "pitch": 0.10139940519806956,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.7219179650370098,
          "pitch": -0.010087360478070906,
          "rotation": 5.497787143782138,
          "target": "0-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.0013530497037894662,
        "pitch": 0.009299327667054769,
        "fov": 1.3911794189911846
      },
      "linkHotspots": [
        {
          "yaw": -1.9099033499890528,
          "pitch": 0.08437538994188287,
          "rotation": 0,
          "target": "1-dining"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
