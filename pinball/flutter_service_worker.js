'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e2cbcdee12b227f9269d22f45bc120ce",
"index.html": "7af65dbe59520e0d777b6336d0749a47",
"/": "7af65dbe59520e0d777b6336d0749a47",
"main.dart.js": "523607e411edfe5f6ad913bdf340b84a",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "cd17220e8a0f79021f2c91a19f096fe0",
"assets/AssetManifest.json": "45d815abd04c71035d71ebcffa33e954",
"assets/NOTICES": "120d8d955fa138add342ffac4eacead8",
"assets/FontManifest.json": "b08a2ff5f884cbd8619dba1aaf185381",
"assets/packages/pinball_components/fonts/PixeloidMono-1G8ae.ttf": "dbf3f90cee67aab678ca14b1312d0325",
"assets/packages/pinball_components/fonts/PixeloidSansBold-RpeJo.ttf": "d231b0116d3dd8ad58d6ea3a74417055",
"assets/packages/pinball_components/fonts/PixeloidSans-nR3g1.ttf": "6bb6308744b389c96f189aad21a307cb",
"assets/packages/pinball_components/assets/images/signpost/active2.png": "cfb806bcb83bd07601d4d16bfbd2a15e",
"assets/packages/pinball_components/assets/images/signpost/active3.png": "4b9157f152e3483e214ad2dfeee39c73",
"assets/packages/pinball_components/assets/images/signpost/active1.png": "7d87dcb959140ec2e62d4303bc022c59",
"assets/packages/pinball_components/assets/images/signpost/inactive.png": "5e1be36e8563c21cf0093e5b8392953a",
"assets/packages/pinball_components/assets/images/baseboard/left.png": "5197341b0860006687bb40425b2b8dd2",
"assets/packages/pinball_components/assets/images/baseboard/right.png": "9f94d017183666df2a54ab1591d3734b",
"assets/packages/pinball_components/assets/images/multiplier/x6/dimmed.png": "60684d6f319c08f3940746405fac4cac",
"assets/packages/pinball_components/assets/images/multiplier/x6/lit.png": "0adfcfb6313be0b947166c611e70fe60",
"assets/packages/pinball_components/assets/images/multiplier/x4/dimmed.png": "1e62a7e19572342d75dd3e11f73fabef",
"assets/packages/pinball_components/assets/images/multiplier/x4/lit.png": "c9fd6ba9504e63ddf4acd1ab6c3f5814",
"assets/packages/pinball_components/assets/images/multiplier/x3/dimmed.png": "ccfde32f79419bfd605bd71a8c6eff97",
"assets/packages/pinball_components/assets/images/multiplier/x3/lit.png": "84da58b0fe3d7bc45dc7f971cf98c5f2",
"assets/packages/pinball_components/assets/images/multiplier/x2/dimmed.png": "6538f01760513645c5cd9d187bb5cf38",
"assets/packages/pinball_components/assets/images/multiplier/x2/lit.png": "c4216f130efc9f4434acc3eaa7d1b8cc",
"assets/packages/pinball_components/assets/images/multiplier/x5/dimmed.png": "ecd974119d841d17975c6418a0f14724",
"assets/packages/pinball_components/assets/images/multiplier/x5/lit.png": "84ddd7fdfeb06e0832ce6d2e117e1cf9",
"assets/packages/pinball_components/assets/images/plunger/plunger.png": "b3e5820af3de02a47d1b338bf79b01c3",
"assets/packages/pinball_components/assets/images/plunger/rocket.png": "b6c43b14f0925934be335027e55af873",
"assets/packages/pinball_components/assets/images/error_background.png": "8603251a0a53d18d829d64c7aac33357",
"assets/packages/pinball_components/assets/images/slingshot/upper.png": "0dade11c5eda77c20907bfd60ccfc240",
"assets/packages/pinball_components/assets/images/slingshot/lower.png": "3176f2c676d90e2993116ce6aa380a04",
"assets/packages/pinball_components/assets/images/boundary/bottom.png": "05eeb92a0849fe12b0869042c55d8778",
"assets/packages/pinball_components/assets/images/boundary/outer.png": "fffbae07522ebf1b8802e6c77928c900",
"assets/packages/pinball_components/assets/images/boundary/outer_bottom.png": "6df468c84c093cdfd7be90584ed16bcb",
"assets/packages/pinball_components/assets/images/flipper/left.png": "b1547f3f2bf1a7c133f571cc1028326e",
"assets/packages/pinball_components/assets/images/flipper/right.png": "f8b75027851ab8d66053525744faaf95",
"assets/packages/pinball_components/assets/images/board_background.png": "9feacc5137c479c047e96d016996ed95",
"assets/packages/pinball_components/assets/images/dino/animatronic/mouth.png": "230e3f6aa1cbc2961a0e0cbffa43502e",
"assets/packages/pinball_components/assets/images/dino/animatronic/head.png": "ecd0c55aad4a3365131a7c13f59ae166",
"assets/packages/pinball_components/assets/images/dino/top_wall.png": "cb5149b8f467af11a8137b81c133e89f",
"assets/packages/pinball_components/assets/images/dino/bottom_wall.png": "83ddfa109e1cab41b1a010908cf8be59",
"assets/packages/pinball_components/assets/images/dino/top_wall_tunnel.png": "3dbc185205255392f18acef3d6e6d6d2",
"assets/packages/pinball_components/assets/images/score/one_million.png": "d0925a2e8d40d5051c36615f8ae1150a",
"assets/packages/pinball_components/assets/images/score/five_thousand.png": "dfc436951e8e94c71877376c8872ca7c",
"assets/packages/pinball_components/assets/images/score/two_hundred_thousand.png": "c16248c4bc141abda70163c3e18ee4a5",
"assets/packages/pinball_components/assets/images/score/twenty_thousand.png": "992165e89054476a03ce3225fc7e942d",
"assets/packages/pinball_components/assets/images/flapper/flap.png": "ffd30ca85e1580a313fdb21e1c32c562",
"assets/packages/pinball_components/assets/images/flapper/back_support.png": "90d7ab9930b12fa860508f2f9e53ea15",
"assets/packages/pinball_components/assets/images/flapper/front_support.png": "215b46e9543f952996ef1b67db6ebf76",
"assets/packages/pinball_components/assets/images/google_rollover/right/pin.png": "fb25466ff04d444ebfc8fa64f8c0519f",
"assets/packages/pinball_components/assets/images/google_rollover/right/decal.png": "c41ca747fa23f2d85a524d7d480abe1a",
"assets/packages/pinball_components/assets/images/google_rollover/left/pin.png": "a361d911ba73a5d42f7ddbc176a7e6b7",
"assets/packages/pinball_components/assets/images/google_rollover/left/decal.png": "f4c7c6624d17092ca867c244b5176f15",
"assets/packages/pinball_components/assets/images/ball/flame_effect.png": "0338a3f9ffaea8579132a3d666ba0ace",
"assets/packages/pinball_components/assets/images/android/rail/main.png": "b7853f526a33cb2f5ed2e2cc2420cf53",
"assets/packages/pinball_components/assets/images/android/rail/exit.png": "7270e221a610ec7a5b47e14dbe9d031b",
"assets/packages/pinball_components/assets/images/android/spaceship/light_beam.png": "eac0b1f634744d78739a77f08f62a0db",
"assets/packages/pinball_components/assets/images/android/spaceship/animatronic.png": "06c62b4fb8fd218e63e7843842520fe9",
"assets/packages/pinball_components/assets/images/android/spaceship/saucer.png": "3e2137bcea81198bf1ae813d9be0c4de",
"assets/packages/pinball_components/assets/images/android/bumper/a/dimmed.png": "786973a2027a1509e64d1213072db25d",
"assets/packages/pinball_components/assets/images/android/bumper/a/lit.png": "4f073ee6533a4257c5af349ac7ab5a4d",
"assets/packages/pinball_components/assets/images/android/bumper/cow/dimmed.png": "7fb0391772fb1c378c2ff893ca2ce2ea",
"assets/packages/pinball_components/assets/images/android/bumper/cow/lit.png": "cbba954576f902e4788bd8d6397b9ea3",
"assets/packages/pinball_components/assets/images/android/bumper/b/dimmed.png": "945047f700031b480f07410f9ee0ecbc",
"assets/packages/pinball_components/assets/images/android/bumper/b/lit.png": "26c9950491cbb920c42dd5967cd5580d",
"assets/packages/pinball_components/assets/images/android/ramp/railing_background.png": "d3c8a43864193887a3c981d868916a8d",
"assets/packages/pinball_components/assets/images/android/ramp/main.png": "54857fb0c92ad25bb7c5f84fae1103a9",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/active2.png": "59dffbda64f0c12b1830db6c8a78be11",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/active3.png": "684cdd7d0f46ee3ba6ce2404d41744b5",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/active1.png": "18f256a3a8e82b32578a873dec67e4a2",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/active4.png": "c2c226440977df2eda1adf242dd89b95",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/active5.png": "c7bc92c0a9e088106f568083f66cd45c",
"assets/packages/pinball_components/assets/images/android/ramp/arrow/inactive.png": "b0419fbbe1e0dda69286d36fc753b2e9",
"assets/packages/pinball_components/assets/images/android/ramp/railing_foreground.png": "5e5178d4f0d5b41a8752596f0a809dc5",
"assets/packages/pinball_components/assets/images/android/ramp/board_opening.png": "f117f5f04275429edccae56e3ff43e1e",
"assets/packages/pinball_components/assets/images/display_arrows/arrow_right.png": "e08c4fa67db4c0d449a8c12e187dccee",
"assets/packages/pinball_components/assets/images/display_arrows/arrow_left.png": "0d40189cbd33004c72926d002447200c",
"assets/packages/pinball_components/assets/images/google_word/letter6/dimmed.png": "8dea316a33073173f6b059d3169b5a8d",
"assets/packages/pinball_components/assets/images/google_word/letter6/lit.png": "102ebbc5dcdf6859f5653e8c5d544ae8",
"assets/packages/pinball_components/assets/images/google_word/letter1/dimmed.png": "f3abbc91d08f8bed53fb59d3cb8a3d35",
"assets/packages/pinball_components/assets/images/google_word/letter1/lit.png": "d603c3cf2a4f9b3d8ffa05541fbe1352",
"assets/packages/pinball_components/assets/images/google_word/letter2/dimmed.png": "1b27a89ea57099fd6fa67b9593c7489b",
"assets/packages/pinball_components/assets/images/google_word/letter2/lit.png": "5288386094a13c457ee6b7cca4a9f028",
"assets/packages/pinball_components/assets/images/google_word/letter5/dimmed.png": "a7e9279733bb3f6f839d78cbc328d03e",
"assets/packages/pinball_components/assets/images/google_word/letter5/lit.png": "9d9ee5e106fcbc75ac3de2d4cdbeda1b",
"assets/packages/pinball_components/assets/images/google_word/letter4/dimmed.png": "a842d6ef699014ab400f6c630008faa6",
"assets/packages/pinball_components/assets/images/google_word/letter4/lit.png": "ee40ad42fd0a3b9fc426947e4975caef",
"assets/packages/pinball_components/assets/images/google_word/letter3/dimmed.png": "77e7ca518dd4b7019d94b2ac7878cb40",
"assets/packages/pinball_components/assets/images/google_word/letter3/lit.png": "d8d30bdfaf73b163a29297ff78d730fa",
"assets/packages/pinball_components/assets/images/dash/animatronic.png": "d738e6d6af57a928957f00189a093459",
"assets/packages/pinball_components/assets/images/dash/bumper/a/inactive.png": "6ea5f7c8ef34dc62735fbe387c22df1e",
"assets/packages/pinball_components/assets/images/dash/bumper/a/active.png": "4cb834cbe79d3925a9ef4fff43a94044",
"assets/packages/pinball_components/assets/images/dash/bumper/main/inactive.png": "0b8c635fcb53d5f01ad3180a405401c5",
"assets/packages/pinball_components/assets/images/dash/bumper/main/active.png": "76b1fa9a3bd5b08f0e05f8aa58d42a3c",
"assets/packages/pinball_components/assets/images/dash/bumper/b/inactive.png": "79d54766265e0274590745a94308d3a3",
"assets/packages/pinball_components/assets/images/dash/bumper/b/active.png": "977ac26318b041ad9549a5ab92dd3aa3",
"assets/packages/pinball_components/assets/images/skill_shot/pin.png": "95d182a02ef95930f6db503869c3c633",
"assets/packages/pinball_components/assets/images/skill_shot/dimmed.png": "2fad1fc84507de2bdefa512fc5248a23",
"assets/packages/pinball_components/assets/images/skill_shot/lit.png": "1f302f8fc44bd2534fc72298e321d607",
"assets/packages/pinball_components/assets/images/skill_shot/decal.png": "7fc288e4b1959f08253fd0dd25b88c03",
"assets/packages/pinball_components/assets/images/multiball/dimmed.png": "e6420454871f6e8f28112c394b053d16",
"assets/packages/pinball_components/assets/images/multiball/lit.png": "ba636f85ac050563aae888e41baa7b5a",
"assets/packages/pinball_components/assets/images/backbox/marquee.png": "301cc115917c5cde760d9dc41b96570c",
"assets/packages/pinball_components/assets/images/backbox/display_divider.png": "fd1de67d6560b61f57f3e3f258bcd2bc",
"assets/packages/pinball_components/assets/images/backbox/button/twitter.png": "7359233024078f9f35568d4e0d51dacb",
"assets/packages/pinball_components/assets/images/backbox/button/facebook.png": "c1cfaf0db1137ef4ae6d16d7b5bdf1f8",
"assets/packages/pinball_components/assets/images/backbox/display_title_decoration.png": "be3191e6a057921130a8590bdbca60af",
"assets/packages/pinball_components/assets/images/kicker/right/dimmed.png": "a65a5cc6c23f98bf55b81c61197e3646",
"assets/packages/pinball_components/assets/images/kicker/right/lit.png": "3114245292a2230c22a832ee5cf5fbc3",
"assets/packages/pinball_components/assets/images/kicker/left/dimmed.png": "6689f25757a961e3f09ca0e63da01a7b",
"assets/packages/pinball_components/assets/images/kicker/left/lit.png": "e85ee7f2588770358a1a7f9dc96419a1",
"assets/packages/pinball_components/assets/images/launch_ramp/background_railing.png": "993abe291003d77f7f72cc9511c362ee",
"assets/packages/pinball_components/assets/images/launch_ramp/ramp.png": "13ebdf71897f2dbd093ab4f867b08c6f",
"assets/packages/pinball_components/assets/images/launch_ramp/foreground_railing.png": "86672f5bd056d22f20a0056816fb31df",
"assets/packages/pinball_components/assets/images/sparky/animatronic.png": "f35c20add652f3353730cd3e3c94b5a2",
"assets/packages/pinball_components/assets/images/sparky/bumper/a/dimmed.png": "16e8f6f580bc14104bf6bca0f879eb9d",
"assets/packages/pinball_components/assets/images/sparky/bumper/a/lit.png": "19a5c38e72e4110435d3b53aad76b219",
"assets/packages/pinball_components/assets/images/sparky/bumper/c/dimmed.png": "13171b441167f98f384e5bc52ba344ac",
"assets/packages/pinball_components/assets/images/sparky/bumper/c/lit.png": "e6dd2a0e0bb3e26fa5fd3f145299bce9",
"assets/packages/pinball_components/assets/images/sparky/bumper/b/dimmed.png": "1b374b11a83bc01520e01adee7cdb446",
"assets/packages/pinball_components/assets/images/sparky/bumper/b/lit.png": "359d8bdd23be5da76fd7b76cdef56abe",
"assets/packages/pinball_components/assets/images/sparky/computer/glow.png": "c340ea77f8683f45b210d70353f0508b",
"assets/packages/pinball_components/assets/images/sparky/computer/top.png": "f99cb426e0cd6022a582c73aec215a9b",
"assets/packages/pinball_components/assets/images/sparky/computer/base.png": "2fcdcb868584a36c8c841323e88ac6d1",
"assets/packages/pinball_theme/assets/images/pinball_button.png": "f1e6ae05075995e07300cc925c6de84b",
"assets/packages/pinball_theme/assets/images/dino/icon.png": "35800f9fb9df73f479ed091fa916877f",
"assets/packages/pinball_theme/assets/images/dino/ball.png": "85e2378bed7b85cd730a0757af906524",
"assets/packages/pinball_theme/assets/images/dino/animation.png": "4058af12f24a5d2963275ddfdcf8a818",
"assets/packages/pinball_theme/assets/images/dino/leaderboard_icon.png": "e706447ef04c79eb2e492b7752d36dc5",
"assets/packages/pinball_theme/assets/images/dino/background.jpg": "a49f842f27c6aa78ea8ec3fd8ff72f72",
"assets/packages/pinball_theme/assets/images/android/icon.png": "f5fbd7cc51c7575e493feee1b12158cf",
"assets/packages/pinball_theme/assets/images/android/ball.png": "d5941cc16e9dfe3c308aae864bbb6d09",
"assets/packages/pinball_theme/assets/images/android/animation.png": "398e1629921cd839a2d191d22c2e8cfc",
"assets/packages/pinball_theme/assets/images/android/leaderboard_icon.png": "bac1f2e183eba11107664680b3837dca",
"assets/packages/pinball_theme/assets/images/android/background.jpg": "9795984c135618f956baac7e555f0828",
"assets/packages/pinball_theme/assets/images/dash/icon.png": "bc31eddc40f6db0ae0852d0c59033fe5",
"assets/packages/pinball_theme/assets/images/dash/ball.png": "abbbc01e6500f75dc95a18e716d7840a",
"assets/packages/pinball_theme/assets/images/dash/animation.png": "ac28305565e59eabe3ea29735de850e2",
"assets/packages/pinball_theme/assets/images/dash/leaderboard_icon.png": "e1d0c8a1bc972dd1582de821039bc58c",
"assets/packages/pinball_theme/assets/images/dash/background.jpg": "655280b0fd7f047ed956b7c0ebfec073",
"assets/packages/pinball_theme/assets/images/select_character_background.png": "e4104951ad3b6c2f1563304a20a30d20",
"assets/packages/pinball_theme/assets/images/sparky/icon.png": "834cbbf345b7b1b1a3de9bd305ff0cda",
"assets/packages/pinball_theme/assets/images/sparky/ball.png": "fb2c761c254b168f048e0ea8676af29d",
"assets/packages/pinball_theme/assets/images/sparky/animation.png": "4c5450db123412c22c6417f8c836e8e7",
"assets/packages/pinball_theme/assets/images/sparky/leaderboard_icon.png": "91a322d7a602201450cfd838dfe18371",
"assets/packages/pinball_theme/assets/images/sparky/background.jpg": "a69658ef36e71441163b3c592d706c43",
"assets/packages/pinball_audio/assets/music/background.mp3": "d74256deb83cc330cb5eebc5bfeed585",
"assets/packages/pinball_audio/assets/sfx/sparky.mp3": "c1aadf2f13f9865b2bfa796c538f6f58",
"assets/packages/pinball_audio/assets/sfx/game_over_voice_over.mp3": "dd8e968fcd238463b983d8eeaf5bbddf",
"assets/packages/pinball_audio/assets/sfx/google.mp3": "8a3b9d25b980d9ba5b942aae5b124e55",
"assets/packages/pinball_audio/assets/sfx/io_pinball_voice_over.mp3": "f52327967729da5dbf425e711defa1be",
"assets/packages/pinball_audio/assets/sfx/kicker_a.mp3": "15dbdbaa64f4a81d59ac43c8c3f30ec0",
"assets/packages/pinball_audio/assets/sfx/kicker_b.mp3": "d9d07fd2bb77746e6843e3eba9383382",
"assets/packages/pinball_audio/assets/sfx/bumper_b.mp3": "4206b4d4904246f622abb550a83bdfb1",
"assets/packages/pinball_audio/assets/sfx/bumper_a.mp3": "c2b4b9388c6baed23b02d7fb36facf7c",
"assets/packages/pinball_audio/assets/sfx/rollover.mp3": "048b382ca9369eee6bcbe6b1dc0243b7",
"assets/packages/pinball_audio/assets/sfx/flipper.mp3": "26dcc7c6a0d6921a0c7c6b0d78248c45",
"assets/packages/pinball_audio/assets/sfx/android.mp3": "766b79926f137c7ef20cbebdfebe4798",
"assets/packages/pinball_audio/assets/sfx/dino.mp3": "1630d66865b8a5a18e42f41764c44740",
"assets/packages/pinball_audio/assets/sfx/dash.mp3": "b24e9450c4f492c626ac415f14d80f71",
"assets/packages/pinball_audio/assets/sfx/cow_moo.mp3": "4a2d84cf0d3bb398c9c4a2a6bbacf8ff",
"assets/packages/pinball_audio/assets/sfx/launcher.mp3": "02b3d49418572eed809cc042d793d253",
"assets/packages/pinball_ui/fonts/PixeloidMono-1G8ae.ttf": "dbf3f90cee67aab678ca14b1312d0325",
"assets/packages/pinball_ui/fonts/PixeloidSansBold-RpeJo.ttf": "d231b0116d3dd8ad58d6ea3a74417055",
"assets/packages/pinball_ui/fonts/PixeloidSans-nR3g1.ttf": "6bb6308744b389c96f189aad21a307cb",
"assets/packages/pinball_ui/assets/images/dialog/background.png": "a33a9133cac960de8969426dc0a82dfa",
"assets/packages/pinball_ui/assets/images/button/dpad_left.png": "084548103370315c3e98e660d6ccb91e",
"assets/packages/pinball_ui/assets/images/button/dpad_up.png": "e823bad3db679f71f8b7c480c5a84a86",
"assets/packages/pinball_ui/assets/images/button/pinball_button.png": "f1e6ae05075995e07300cc925c6de84b",
"assets/packages/pinball_ui/assets/images/button/dpad_right.png": "38eb49fed3d95072f72aa4fad5593bd6",
"assets/packages/pinball_ui/assets/images/button/dpad_down.png": "fe126343b33bd11375742b810b7d0c60",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/bonus_animation/android_spaceship.png": "46fb558bc450947b2bb49cfc59b701b2",
"assets/assets/images/bonus_animation/dash_nest.png": "efd592c03fb1f557bc52d3f319cfc7d3",
"assets/assets/images/bonus_animation/sparky_turbo_charge.png": "e9417b6f4bf3408afe30553f470c96e5",
"assets/assets/images/bonus_animation/google_word.png": "d36a6eb69adfb5d7ac9dd1a3500d324e",
"assets/assets/images/bonus_animation/dino_chomp.png": "cfeb26ecb0ed9af6f6ecb6b73971b55f",
"assets/assets/images/components/space.png": "035592d0396e8378b06f864eac240b47",
"assets/assets/images/components/key.png": "9ad21b935dae863dbd97b6b25987b50e",
"assets/assets/images/score/mini_score_background.png": "cc418b915dc51161a3b6f29a905e04b2",
"assets/assets/images/loading_game/io_pinball.png": "e6710a37d648336e59a9179ca1a75e4a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
