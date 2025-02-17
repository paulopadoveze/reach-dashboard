import { createStore } from 'vuex'

const store = createStore({
  state: {
    isBudgetEnabled: true,
    isCurrentCPMEnabled: true,
    financialSituation: {
      cpm: {
        value: '2.53',
        projected: '4.15'
      },
      budget: {
        value: 450000.00,
        spent: 153212.00
      }
    },
    deliveredPosts: [
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@piperrockelle/video/7446203192792239406",
            "postTime": 1733675486,
            "author": {
              "username": "piperrockelle"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7446203192792239406/7446203192792239406_1733704362896.mp4"
            },
            "stats": {
              "viewCount": 11312014,
              "likeCount": 578691,
              "commentCount": 5291,
              "shareCount": 10362
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@asalpersian/video/7442771731384716574",
            "postTime": 1732876555,
            "author": {
              "username": "asalpersian"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442771731384716574/7442771731384716574_1732906153014.mp4"
            },
            "stats": {
              "viewCount": 187570,
              "likeCount": 14583,
              "commentCount": 531,
              "shareCount": 360
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@skyehitchcock/video/7443860728915873070",
            "postTime": 1733130093,
            "author": {
              "username": "skyehitchcock"
            },
            "video": {
              "playbackUrl": null
            },
            "stats": {
              "viewCount": 83063,
              "likeCount": 6674,
              "commentCount": 46,
              "shareCount": 33
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@influencerron/video/7442541488514272542",
            "postTime": 1732822936,
            "author": {
              "username": "influencerron"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442541488514272542/7442541488514272542_1732935017219.mp4"
            },
            "stats": {
              "viewCount": 48352,
              "likeCount": 2121,
              "commentCount": 21,
              "shareCount": 66
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@yascrackedthat/video/7445350336937708843",
            "postTime": 1733476919,
            "author": {
              "username": "yeezyslidesfeelmadgood"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7445350336937708843/7445350336937708843_1733505823698.mp4"
            },
            "stats": {
              "viewCount": 223818,
              "likeCount": 5909,
              "commentCount": 225,
              "shareCount": 91
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@pejaandmom/video/7444002528078990622",
            "postTime": 1733163116,
            "author": {
              "username": "pejaandmom"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444002528078990622/7444002528078990622_1733192263163.mp4"
            },
            "stats": {
              "viewCount": 245392,
              "likeCount": 5517,
              "commentCount": 351,
              "shareCount": 35
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@javierramireze1/video/7442456802093960491",
            "postTime": 1732803211,
            "author": {
              "username": "javierramireze1"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442456802093960491/7442456802093960491_1732832072802.mp4"
            },
            "stats": {
              "viewCount": 143137,
              "likeCount": 588,
              "commentCount": 57,
              "shareCount": 3
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@kinglexagod/video/7444980596163579179",
            "postTime": 1733390829,
            "author": {
              "username": "kinglexagod"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444980596163579179/7444980596163579179_1733419713308.mp4"
            },
            "stats": {
              "viewCount": 61768,
              "likeCount": 2346,
              "commentCount": 289,
              "shareCount": 17
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@.simplyyy.shyyy/video/7446174884427762990",
            "postTime": 1733668895,
            "author": {
              "username": ".simplyyy.shyyy"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7446174884427762990/7446174884427762990_1733701602209.mp4"
            },
            "stats": {
              "viewCount": 44460,
              "likeCount": 3884,
              "commentCount": 40,
              "shareCount": 7
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@giada.ryann/video/7442716232748453166",
            "postTime": 1732863616,
            "author": {
              "username": "giada.ryann"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442716232748453166/7442716232748453166_1732892722704.mp4"
            },
            "stats": {
              "viewCount": 41143,
              "likeCount": 1100,
              "commentCount": 52,
              "shareCount": 9
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@lilith_unleashed/video/7442460851753258283",
            "postTime": 1732804154,
            "author": {
              "username": "lilith_unleashed"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442460851753258283/7442460851753258283_1732833102298.mp4"
            },
            "stats": {
              "viewCount": 6119,
              "likeCount": 1019,
              "commentCount": 188,
              "shareCount": 2
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@gavsocrazy/video/7444289637155278126",
            "postTime": 1733229955,
            "author": {
              "username": "gavsocrazy"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444289637155278126/7444289637155278126_1733313604660.mp4"
            },
            "stats": {
              "viewCount": 2714,
              "likeCount": 310,
              "commentCount": 1,
              "shareCount": 11
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@carriebernans/video/7444953240774380843",
            "postTime": 1733384459,
            "author": {
              "username": "carriebernans"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444953240774380843/7444953240774380843_1733413493094.mp4"
            },
            "stats": {
              "viewCount": 3486,
              "likeCount": 32,
              "commentCount": 4,
              "shareCount": 1
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@ssmmiillll/video/7444236696843062559",
            "postTime": 1733217650,
            "author": {
              "username": "ssmmiillll"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444236696843062559/7444236696843062559_1733246708242.mp4"
            },
            "stats": {
              "viewCount": 615,
              "likeCount": 38,
              "commentCount": 2,
              "shareCount": 2
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@unusual_britney/video/7442437366591049016",
            "postTime": 1732798691,
            "author": {
              "username": "unusual_britney"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442437366591049016/7442437366591049016_1732827813763.mp4"
            },
            "stats": {
              "viewCount": 3407,
              "likeCount": 108,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@iamkatrinalashay/video/7443476841555332383",
            "postTime": 1733040724,
            "author": {
              "username": "iamkatrinalashay"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7443476841555332383/7443476841555332383_1733069587232.mp4"
            },
            "stats": {
              "viewCount": 1424,
              "likeCount": 67,
              "commentCount": 9,
              "shareCount": 1
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@kingchrxs/video/7444849247717051691",
            "postTime": 1733360264,
            "author": {
              "username": "kingchrxs"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444849247717051691/7444849247717051691_1733389204544.mp4"
            },
            "stats": {
              "viewCount": 12556,
              "likeCount": 19,
              "commentCount": 0,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@slymeree/video/7443847113164803371",
            "postTime": 1733126924,
            "author": {
              "username": "imangelriveraa"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7443847113164803371/7443847113164803371_1733155823293.mp4"
            },
            "stats": {
              "viewCount": 2800,
              "likeCount": 108,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@babysialive/video/7444295118347111710",
            "postTime": 1733231245,
            "author": {
              "username": "babysialive"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444295118347111710/7444295118347111710_1733260093926.mp4"
            },
            "stats": {
              "viewCount": 2181,
              "likeCount": 133,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@danabthe1stlady/video/7442958187256352046",
            "postTime": 1732919953,
            "author": {
              "username": "danabthe1stlady"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442958187256352046/7442958187256352046_1732952197021.mp4"
            },
            "stats": {
              "viewCount": 797,
              "likeCount": 34,
              "commentCount": 2,
              "shareCount": 1
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@ceciinthecity/video/7443269953861471519",
            "postTime": 1732992547,
            "author": {
              "username": "ceciinthecity"
            },
            "video": {
              "playbackUrl": null
            },
            "stats": {
              "viewCount": 329,
              "likeCount": 33,
              "commentCount": 0,
              "shareCount": 1
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@merpirate_g/video/7444257967156792607",
            "postTime": 1733222600,
            "author": {
              "username": "merpirate_g"
            },
            "video": {
              "playbackUrl": null
            },
            "stats": {
              "viewCount": 885,
              "likeCount": 64,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@bubblesorbet/video/7444642845161475358",
            "postTime": 1733312195,
            "author": {
              "username": "bubblesorbet"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444642845161475358/7444642845161475358_1733377553660.mp4"
            },
            "stats": {
              "viewCount": 276,
              "likeCount": 6,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@the.pa.patric/video/7444820376238034207",
            "postTime": 1733353562,
            "author": {
              "username": "the.pa.patric"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444820376238034207/7444820376238034207_1733418678098.mp4"
            },
            "stats": {
              "viewCount": 574,
              "likeCount": 40,
              "commentCount": 2,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@briee2u/video/7444264344055008554",
            "postTime": 1733224067,
            "author": {
              "username": "briee2u"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444264344055008554/7444264344055008554_1733252964887.mp4"
            },
            "stats": {
              "viewCount": 355,
              "likeCount": 49,
              "commentCount": 6,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@tinytirzah/video/7442857008602025247",
            "postTime": 1732896400,
            "author": {
              "username": "tinytirzah"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442857008602025247/7442857008602025247_1732937178187.mp4"
            },
            "stats": {
              "viewCount": 437,
              "likeCount": 37,
              "commentCount": 11,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@lexiwings/video/7443480129965231406",
            "postTime": 1733041476,
            "author": {
              "username": "lexiwings"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7443480129965231406/7443480129965231406_1733070376940.mp4"
            },
            "stats": {
              "viewCount": 349,
              "likeCount": 33,
              "commentCount": 5,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@angie96s/video/7443171235816688927",
            "postTime": 1732969568,
            "author": {
              "username": "angie96s"
            },
            "video": {
              "playbackUrl": null
            },
            "stats": {
              "viewCount": 295,
              "likeCount": 37,
              "commentCount": 0,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@damnranda/video/7444969967771979050",
            "postTime": 1733388354,
            "author": {
              "username": "damnranda_"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444969967771979050/7444969967771979050_1733417212911.mp4"
            },
            "stats": {
              "viewCount": 922,
              "likeCount": 26,
              "commentCount": 1,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@tiyahbeebbs/video/7443944403535662392",
            "postTime": 1733149576,
            "author": {
              "username": "tiyahbeebbs"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7443944403535662392/7443944403535662392_1733179854023.mp4"
            },
            "stats": {
              "viewCount": 169,
              "likeCount": 3,
              "commentCount": 0,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@twerkerdan/video/7443170651931708715",
            "postTime": 1732969419,
            "author": {
              "username": "twerkerdan"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7443170651931708715/7443170651931708715_1732998882621.mp4"
            },
            "stats": {
              "viewCount": 345,
              "likeCount": 28,
              "commentCount": 0,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@monicaitalian93/video/7442642328365321514",
            "postTime": 1732846422,
            "author": {
              "username": "monicaitalian93"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7442642328365321514/7442642328365321514_1732875457504.mp4"
            },
            "stats": {
              "viewCount": 449,
              "likeCount": 17,
              "commentCount": 1,
              "shareCount": 0
            }
          }
        },
        {
          "tiktokPost": {
            "postUrl": "https://www.tiktok.com/@jeimmylorena4/video/7444791768345808159",
            "postTime": 1733346882,
            "author": {
              "username": "jeimmylorena4"
            },
            "video": {
              "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7444791768345808159/7444791768345808159_1733412393462.mp4"
            },
            "stats": {
              "viewCount": 490,
              "likeCount": 45,
              "commentCount": 22,
              "shareCount": 26
            }
          }
        }
    ],
    creators:[
        {
          userName: 'piperrockelle',
          displayName: 'Piper Rockelle',
          followers: 12983129,
          averageViews:182382,
          engagementRate: '8.4%',
          rates: 1200,
          status: 'Waiting for Draft',
          statusClass: 'draft-waiting'
        },
        {
          userName: 'gavsocrazy',
          displayName: 'Gav',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Draft posted',
          statusClass: 'draft-posted'
        },
        {
          userName: 'skyehitchcock',
          displayName: 'Howard Holo',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Draft approved',
          statusClass: 'draft-approved'
        },
        {
          userName: 'pejaandmom',
          displayName: 'Peja & Mom',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Offer Approved',
          statusClass: 'offer-approved'
        },
        {
          userName: 'javierramireze1',
          displayName: 'Javier Ramirez',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Offer Sent',
          statusClass: 'offer-sent'
        },
        {
          userName: 'unusual_britney',
          displayName: 'Unusual Britney',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Posted',
          statusClass: 'posted'
        },
        {
          userName: 'iamkatrinalashay',
          displayName: 'Katrina Lashay',
          followers: 190201,
          averageViews:34364,
          engagementRate: '19.7%',
          rates: 560,
          status: 'Cancelled',
          statusClass: 'cancelled'
        }
    ],
    draftPosts: [
      {
        "draft": {
          "draftTime": 1736074119,
          "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7357461080140074286/7357461080140074286_1713201830109.mp4",
          "author": {
            "username": "dancingwithkyle",
          },
        },
      },
      {
        "draft": {
          "draftTime": 1736311984,
          "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7359037370626411822/7359037370626411822_1713410871858.mp4",
          "author": {
            "username": "foodieadventures123",
          },
        },
      },
      {
        "draft": {
          "draftTime": 1736174864,
          "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7357471808506891563/7357471808506891563_1713201845106.mp4",
          "author": {
            "username": "travelbug_jen",
          },
        },
      },
      {
        "draft": {
          "draftTime": 1736512821,
          "playbackUrl": "https://cdn.reach.me/externalPlatforms/tiktok-native/media/7358887937255279903/7358887937255279903_1713378174857.mp4",
          "author": {
            "username": "gamerbro92",
          },
        },
      }
    ]
  },
  mutations: {
    SET_MOCK_DATA(state, data) {
      state.mockData = data;
    },
    setIsBudgetEnabled(state, value) {
      state.isBudgetEnabled = value
    },
    setIsCurrentCPMEnabled(state, value) {
      state.isCurrentCPMEnabled = value
    }
  },
  actions: {
    updateIsBudgetEnabled({ commit }, value) {
      commit('setIsBudgetEnabled', value)
    },
    updateIsCurrentCPMEnabled({ commit }, value) {
      commit('setIsCurrentCPMEnabled', value)
    },
  },
  getters: {
    financialSituation: state => state.financialSituation,
    isBudgetEnabled: state => state.isBudgetEnabled,
    isCurrentCPMEnabled: state => state.isCurrentCPMEnabled,
    deliveredPosts: state => state.deliveredPosts,
    creators: state => state.creators,
    draftPosts: state => state.draftPosts
  }
});

export default store;
