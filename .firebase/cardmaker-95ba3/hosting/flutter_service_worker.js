'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f0d529b44ebf22e6c74ad1acbb10f57",
"assets/AssetManifest.bin.json": "66f9a774ab58e2b76ca35c208794307d",
"assets/AssetManifest.json": "d656f2e4fee961aee8ad98cfbd9fb0d6",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/photos/colored.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/photos/mobile.png": "b73399d02fceb26b510b6abe92894d80",
"assets/assets/photos/profile1.png": "c1a2ad54339cc258c24adf515cdd70f9",
"assets/assets/photos/profile10.png": "58f51766a091d1ae07f43306acde9834",
"assets/assets/photos/profile11.png": "8ebe694392074e72dc732d72288d2976",
"assets/assets/photos/profile12.png": "a07537690f5d8b95f1c17382786b3bbb",
"assets/assets/photos/profile13.png": "b3ba84a89df78af0a9b2dfe9b82e0151",
"assets/assets/photos/profile14.png": "2f506b818b13e9cfbb37879ce5878e1c",
"assets/assets/photos/profile15.png": "69d0775bef00d3b7e8f1bfeb9c31e26b",
"assets/assets/photos/profile16.png": "43f41de07909b347faefbc70563dd80e",
"assets/assets/photos/profile17.png": "3ca45cea5abd16e05f3c1bd8caf7772e",
"assets/assets/photos/profile18.png": "0330927cc545b6e28f3bd8531f71c934",
"assets/assets/photos/profile19.png": "d62788516b06a3509a43cef3baffd597",
"assets/assets/photos/profile2.png": "1f54034e0ec7b87b7410a1c285149fc6",
"assets/assets/photos/profile20.png": "32afb645e4c9aec2c3d4a81bd7074cc6",
"assets/assets/photos/profile21.JPG": "9bf0a32e802991eb479493df162c1ceb",
"assets/assets/photos/profile22.jpg": "3de6c97e0e51a25102f19d890affde3b",
"assets/assets/photos/profile23.jpg": "e71535814446edccf9b381ba8a7474f4",
"assets/assets/photos/profile24.jpg": "3747e8065039964876381d5e60502c65",
"assets/assets/photos/profile25.png": "327681f378b6ea0097f853e1b9d5804b",
"assets/assets/photos/profile26.jpg": "7c1be94c849733850c1dbd104b0e0310",
"assets/assets/photos/profile27.JPG": "909d89abf6bc2763e65552f8b1ba34b7",
"assets/assets/photos/profile3.png": "74b332181d9e7e7c676bbdbe9fe75782",
"assets/assets/photos/profile4.png": "86522ff8832fc950681829d59fa9d50a",
"assets/assets/photos/profile5.png": "bf517b689bdda87fd1bab8a2f7e8863d",
"assets/assets/photos/profile6.png": "5406966278e36ba5ef1a95549b3fc917",
"assets/assets/photos/profile7.png": "e7b037642c700ea1629afa4842d07fc5",
"assets/assets/photos/profile8.png": "d0dc51adf980d81449571401abc0336e",
"assets/assets/photos/profile9.png": "a69e48965d93d6420faf42fb2a8cc244",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/projects/snackbar.png": "426d7d3320b4207468e1dec6322b3b08",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/anglo_banner2.png": "293850491de44183fcb14a30933d588e",
"assets/assets/work/anglo_logo.png": "b92ce1b97bc69dccf79a29da2ffd7c67",
"assets/assets/work/anglo_ss1.jpg": "1621762a3eb86e060f07f9fdc6256bda",
"assets/assets/work/anglo_ss2.png": "9155e82dfee9626d35429c2662546a06",
"assets/assets/work/anglo_ss3.png": "bbe3c6e9f8f3ccd49daba71ee1455147",
"assets/assets/work/anglo_ss4.png": "0194efa4998dc3e4efc9119cd62ebb37",
"assets/assets/work/anglo_ss5.jpg": "9df3819deaae4e12cc76d0aa3c7109c8",
"assets/assets/work/anglo_ss6.jpg": "4f6ebd71126449f462f241f1bbe6a975",
"assets/assets/work/anglo_ss7.jpg": "c6537475fead61071874688a8c695dfe",
"assets/assets/work/banner1.png": "494555989e2836538f1c8bac23d1c2a0",
"assets/assets/work/banner2.png": "b49c0c6a9c31deb8ec43c6ffe5120b1e",
"assets/assets/work/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/work/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/work/etaxi/admin/1.png": "1d8743db466aece035f9862425e8408a",
"assets/assets/work/etaxi/admin/10.png": "05b66fefe099d1398550717c8469ead3",
"assets/assets/work/etaxi/admin/11.png": "910d3e47a3be03e26bb77f3e361be84a",
"assets/assets/work/etaxi/admin/12.png": "97db11a9c62306c8623a549470ffc568",
"assets/assets/work/etaxi/admin/2.png": "1a0157be9534574c623829f5318b8faa",
"assets/assets/work/etaxi/admin/3.png": "2c756dd73055974afbefda22999ef474",
"assets/assets/work/etaxi/admin/4.png": "2140d686c7736e0b5301bca0226db7d4",
"assets/assets/work/etaxi/admin/5.png": "ff5185de25fdd2a4e47f91670aa1a3ef",
"assets/assets/work/etaxi/admin/6.png": "7ace00e247bc303cf2e60c16fb40461a",
"assets/assets/work/etaxi/admin/7.png": "ce2bfffb64ad8231fdb425344d3305ea",
"assets/assets/work/etaxi/admin/8.png": "884afb8fa97060618a639996550413c0",
"assets/assets/work/etaxi/admin/9.png": "fe7b09f9374beccc3203e02321e4d63f",
"assets/assets/work/etaxi/admin/admin_banner1.png": "279258a341810661f3f419a4f07eca72",
"assets/assets/work/etaxi/admin/admin_logo.png": "ebfa7194eca6e6ad2313d283d2ef3bdf",
"assets/assets/work/etaxi/admin/mockup/1.png": "9724f8dd43d3cdf79a93492d827d0eb9",
"assets/assets/work/etaxi/admin/mockup/10.png": "5988d25acffb83b4557fc4be30a0c924",
"assets/assets/work/etaxi/admin/mockup/11.png": "98117c31f81ae982fab9c0b5b56a1625",
"assets/assets/work/etaxi/admin/mockup/12.png": "b619150032262fc69200b8cff18f3199",
"assets/assets/work/etaxi/admin/mockup/2.png": "463e23f24f20c01cabe4413a59d42472",
"assets/assets/work/etaxi/admin/mockup/3.png": "04a0629246f56eb6d8a950fb91def100",
"assets/assets/work/etaxi/admin/mockup/4.png": "30e54d2c3a6c4f415b144464520c47a6",
"assets/assets/work/etaxi/admin/mockup/5.png": "04a24dcabdfc51364be96361d56679dc",
"assets/assets/work/etaxi/admin/mockup/6.png": "74c99e9548b05dbb3e3d97c96b2daca5",
"assets/assets/work/etaxi/admin/mockup/7.png": "d99dd3307ca57a67928e79787a48839d",
"assets/assets/work/etaxi/admin/mockup/8.png": "785ad7210236aaf610500881084f502e",
"assets/assets/work/etaxi/admin/mockup/9.png": "9af9533b4d15d6ab2a669aa6154c12be",
"assets/assets/work/etaxi/driver/1.png": "7b3f5f362480d83b4d31ea520ae6867f",
"assets/assets/work/etaxi/driver/10.png": "f07cb4acd0456ee8eb392eb439e0f8ab",
"assets/assets/work/etaxi/driver/11.png": "4f188f7225a78757582958ac16d99d41",
"assets/assets/work/etaxi/driver/12.png": "f47b46fddb9943c47e0ac8bea7587e2d",
"assets/assets/work/etaxi/driver/13.png": "903f38c0da385e4b0ffc13972b3ceba2",
"assets/assets/work/etaxi/driver/14.png": "8c40bb706759daa7a37242d13b9e7a7d",
"assets/assets/work/etaxi/driver/15.png": "e7e0f862a82910455eda9797db1c7a5c",
"assets/assets/work/etaxi/driver/16.png": "78b03bb6c470dc971bc1da2cd6f24db0",
"assets/assets/work/etaxi/driver/2.png": "1d8743db466aece035f9862425e8408a",
"assets/assets/work/etaxi/driver/3.png": "3c1552610cccaf19474607ada6f8c308",
"assets/assets/work/etaxi/driver/4.png": "b8fc335519f96e702c4b052b05d278d8",
"assets/assets/work/etaxi/driver/5.png": "2ce1662a94d1a57ee63e2c834b863ff0",
"assets/assets/work/etaxi/driver/6.png": "092fe99bd5f703e0013e1b07f391a3f8",
"assets/assets/work/etaxi/driver/7.png": "3d2fd27f91bc213df283b2045ce96662",
"assets/assets/work/etaxi/driver/8.png": "ab3437e76d7537961125288e0fa8c385",
"assets/assets/work/etaxi/driver/9.png": "af5abe0a82944f2e78bf99b00f5f47e6",
"assets/assets/work/etaxi/driver/driver_banner1.png": "0598d130235bb13ec48c8f91c0d80f47",
"assets/assets/work/etaxi/driver/logo.png": "4361778fce4aba808032cc97c6632aa4",
"assets/assets/work/etaxi/driver/mockup/1.png": "fc00e093826fcc0a29a845b255c55070",
"assets/assets/work/etaxi/driver/mockup/10.png": "31f94574d62a3ea7f78001789ff65c74",
"assets/assets/work/etaxi/driver/mockup/11.png": "8ac769d681414f8263cbb9b419360863",
"assets/assets/work/etaxi/driver/mockup/12.png": "374eeb189bfe0bcecd007605d0ac6229",
"assets/assets/work/etaxi/driver/mockup/13.png": "3d1cfa1e1abd6570d1c0ea17ed7a69be",
"assets/assets/work/etaxi/driver/mockup/14.png": "d5a8139126a5e502757f1ac37270b286",
"assets/assets/work/etaxi/driver/mockup/15.png": "a234f256838fbd47a80ec783ff9b34e6",
"assets/assets/work/etaxi/driver/mockup/16.png": "8902979f5c271839483728f8c84b4fdc",
"assets/assets/work/etaxi/driver/mockup/2.png": "bc309a45d50d6fc4b9a5fd36d5a36092",
"assets/assets/work/etaxi/driver/mockup/3.png": "cd1ff5ec68761c8a120a5dabd3871168",
"assets/assets/work/etaxi/driver/mockup/4.png": "8c03f50c635f2bfa97be5deb5042663c",
"assets/assets/work/etaxi/driver/mockup/5.png": "442cb32d9966e6074cb86b0af61831eb",
"assets/assets/work/etaxi/driver/mockup/6.png": "2920e65caa87c3d416f09e0223735025",
"assets/assets/work/etaxi/driver/mockup/7.png": "9abd486cca4dd66487eac84de6b6379f",
"assets/assets/work/etaxi/driver/mockup/8.png": "182c49f18ad8ac218acbc6e101300fd7",
"assets/assets/work/etaxi/driver/mockup/9.png": "500232618d5982ced5c539b64fbd39e1",
"assets/assets/work/etaxi/user/1.png": "5bd868225827df918404770a63b1e048",
"assets/assets/work/etaxi/user/10.png": "bf27566b728e4043a993d7fed38851eb",
"assets/assets/work/etaxi/user/11.png": "bbd4c23439afdd5d95656786cd96d179",
"assets/assets/work/etaxi/user/12.png": "80936bf0551450d7f632cd35934dc7ef",
"assets/assets/work/etaxi/user/13.png": "fec08f708ec034c5322f474b35d13a2d",
"assets/assets/work/etaxi/user/14.png": "e8e187152ed3f4aaf98ea61b2044fbc6",
"assets/assets/work/etaxi/user/15.png": "08ca8f74513c815fdf283177e5a3027a",
"assets/assets/work/etaxi/user/16.png": "9fee0dc9f5780a4649b37c0c286a86d9",
"assets/assets/work/etaxi/user/17.png": "75a5067a7fbc3cf60cb90b52f1971a3c",
"assets/assets/work/etaxi/user/18.png": "097a9b83cdeba5e930c14a280f971fd0",
"assets/assets/work/etaxi/user/2.png": "994ad9c73c8b300413cbf4ffac9124fc",
"assets/assets/work/etaxi/user/3.png": "d620cb6648182ccbc4de39f476906d74",
"assets/assets/work/etaxi/user/4.png": "6b12836cd906c97e6449a6723fd60836",
"assets/assets/work/etaxi/user/5.png": "12782e5dc1d4fb135e5e25d5b22c2bf3",
"assets/assets/work/etaxi/user/6.png": "dae83896c02c77cacf2f956e6130efca",
"assets/assets/work/etaxi/user/7.png": "3ea3643a347dda2e0795b364268dc965",
"assets/assets/work/etaxi/user/8.png": "11be1cdf54c381d08098b810d9bf6b71",
"assets/assets/work/etaxi/user/9.png": "1ea60a55c93a1b5a09c7f37f26aa31e6",
"assets/assets/work/etaxi/user/logo.png": "4361778fce4aba808032cc97c6632aa4",
"assets/assets/work/etaxi/user/mockup/1.png": "fc00e093826fcc0a29a845b255c55070",
"assets/assets/work/etaxi/user/mockup/10.png": "9d9152ab1c7aaff9d7ee24945df41252",
"assets/assets/work/etaxi/user/mockup/11.png": "741042468b219aed680457e1a2dff7e4",
"assets/assets/work/etaxi/user/mockup/12.png": "f930d5826c4f95fcfac7f2a630783795",
"assets/assets/work/etaxi/user/mockup/13.png": "7cfb64d80ae3f9a47b76959e60c37dee",
"assets/assets/work/etaxi/user/mockup/14.png": "ae78d7073a751acbad1f783a9c9c0ae0",
"assets/assets/work/etaxi/user/mockup/15.png": "178eec76782ea8eaa533559adc528846",
"assets/assets/work/etaxi/user/mockup/16.png": "70863d58f5ce42610d93be80ae425cf4",
"assets/assets/work/etaxi/user/mockup/17.png": "44dbc5790175f76047ef660516fe2dc1",
"assets/assets/work/etaxi/user/mockup/2.png": "d2663d327d3acb9a797ec14f69b7bdd9",
"assets/assets/work/etaxi/user/mockup/3.png": "812e2071ed2d00529285c02f804ed4be",
"assets/assets/work/etaxi/user/mockup/4.png": "95bd8becee7ceb0b01e96c7bbfae1bee",
"assets/assets/work/etaxi/user/mockup/5.png": "a26f5a57a128ebe2f58cd561362a08cb",
"assets/assets/work/etaxi/user/mockup/6.png": "1c405bddf7b344e2458fa22dbcce8ca9",
"assets/assets/work/etaxi/user/mockup/7.png": "dce96ec4582ac42fd2d51ae72c7e5507",
"assets/assets/work/etaxi/user/mockup/8.png": "70b64a1c48940c4481a04075d3df3ef3",
"assets/assets/work/etaxi/user/mockup/9.png": "533dae60a8e9806acb974b913d02c777",
"assets/assets/work/etaxi/user/mockup/Group%252038505.png": "111e0c9a16719b9c89442e089aa36951",
"assets/assets/work/etaxi/user/user_banner.png": "5948d1b7877b19d4ad1f25e8437642b0",
"assets/assets/work/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/work/flutter_dashtar.png": "8c0e65cb259c3febc374af7cd4d209ec",
"assets/assets/work/pkg_banner1.png": "a8735d9cc0393dd3daf511fa4da18952",
"assets/assets/work/quiz/1.jpg": "d8c6f2aa8fd2718e4d9c6e65dc2240d7",
"assets/assets/work/quiz/10.jpg": "4d41217f3bd514dfc141a32dbd45f044",
"assets/assets/work/quiz/11.jpg": "79abc4520d1426f3d9f0973faec7c5df",
"assets/assets/work/quiz/12.jpg": "fec45fc0ce0c6c72545b569d035da9cc",
"assets/assets/work/quiz/13.jpg": "d38ed89ee6172d54142a9f1396263ec7",
"assets/assets/work/quiz/14.jpg": "db38f860adf063fc43f63577b2d56ae2",
"assets/assets/work/quiz/15.jpg": "14fd2a360b0be5a788c205b87f6f3b9b",
"assets/assets/work/quiz/16.jpg": "0872c5130fcf7702092516e50b48ef3b",
"assets/assets/work/quiz/17.jpg": "9add131632584a83b2f156d3bf726989",
"assets/assets/work/quiz/18.jpg": "8a8d319179c6832cf5933a1e7084a227",
"assets/assets/work/quiz/19.jpg": "3861226d44726cd5efc213a5676bd06e",
"assets/assets/work/quiz/2.jpg": "e07f12cdc195da7971780a8b85d58422",
"assets/assets/work/quiz/20.jpg": "475a4c09e57af13efba96675d01f99f4",
"assets/assets/work/quiz/21.jpg": "c78168e26462493b5ec3727daa3872f6",
"assets/assets/work/quiz/22.jpg": "c2ec45e557811be1794aeedf16283af3",
"assets/assets/work/quiz/23.jpg": "bac55ac05a06d1c62428ee1afd396e35",
"assets/assets/work/quiz/24.jpg": "93124890dd7a5ada37f9fb03d474d0e5",
"assets/assets/work/quiz/25.jpg": "f4bbbdb2d513a4c134b210ba54e305b8",
"assets/assets/work/quiz/26.jpg": "567b73fae0e3aa39fd84e388bbd570c8",
"assets/assets/work/quiz/27.jpg": "66b6b0dc1bdb50ff227517fbf7b52ff9",
"assets/assets/work/quiz/3.jpg": "1828db50de6ada85afe443ec38b302c0",
"assets/assets/work/quiz/4.jpg": "887fa1621152a3fb50b27c0bfed06a2e",
"assets/assets/work/quiz/5.jpg": "ddcebc7f281531183d21704d3050f14f",
"assets/assets/work/quiz/6.jpg": "359af1013bb57768a9f9246f8f0cf240",
"assets/assets/work/quiz/7.jpg": "3e5d09626e54a77dda6e7ca5b69ec5cb",
"assets/assets/work/quiz/8.jpg": "a08e194ec62dd23848883f88a2aa76a8",
"assets/assets/work/quiz/9.jpg": "4de00f6c690adc8b0aa0152c9b70825e",
"assets/assets/work/quiz/banner1.png": "b510a6ee816bb81845faf498fef4d047",
"assets/assets/work/quiz/logo1.png": "5601430e06a5cc283a88becc53dc7512",
"assets/assets/work/quiz/logo2.png": "5601430e06a5cc283a88becc53dc7512",
"assets/assets/work/quiz/mokup/1.png": "ba7a255a9e968b5aa1bc72f31e04f32e",
"assets/assets/work/quiz/mokup/10.png": "5513fcacf7475801214c7b9e150083f8",
"assets/assets/work/quiz/mokup/11.png": "60ddf6de3e4ecddc27559b0dd7f7b252",
"assets/assets/work/quiz/mokup/12.png": "950ae67522f781c6bd1e2952f3f860b5",
"assets/assets/work/quiz/mokup/13.png": "9ab69e12b2d68b6ec080916c8b5d5431",
"assets/assets/work/quiz/mokup/14.png": "cb2eeb59e824e1d3e25339d65ed7ef76",
"assets/assets/work/quiz/mokup/15.png": "ea7a6202bf276e791fecbaf0c9c43383",
"assets/assets/work/quiz/mokup/16.png": "d58608b356d003efb2ba092eaba1d3e4",
"assets/assets/work/quiz/mokup/17.png": "8c1fab5dab88f43bfcef1ca48e4661e2",
"assets/assets/work/quiz/mokup/18.png": "dbbdd333c570fadd6d94dd6d3dcc10fd",
"assets/assets/work/quiz/mokup/19.png": "142891a8f4144171d49594148e5c8265",
"assets/assets/work/quiz/mokup/2.png": "b4c6dfa38de46451bbda8302adc84c2c",
"assets/assets/work/quiz/mokup/20.png": "5109c8126eb1040f86bde6ce2120c614",
"assets/assets/work/quiz/mokup/21.png": "3811f3d6d5fcb7af4e85286ea8c88a7c",
"assets/assets/work/quiz/mokup/22.png": "9b36685edac655ae4f5b9a11107f0455",
"assets/assets/work/quiz/mokup/23.png": "c89d3777c0910e198dc0d44ee52ac1b9",
"assets/assets/work/quiz/mokup/24.png": "a3712d73a281ee45cd26d1db872d32e9",
"assets/assets/work/quiz/mokup/25.png": "00b0cbab1c8da1754eaeb2c603889fe6",
"assets/assets/work/quiz/mokup/26.png": "9ea4ad4450c639cfb8675590ec01af2c",
"assets/assets/work/quiz/mokup/27.png": "5f7e205d5337144006d219dbc376938b",
"assets/assets/work/quiz/mokup/3.png": "bfb41879e54773baccda484f8eac88e3",
"assets/assets/work/quiz/mokup/4.png": "b68b5818fe29f90616e0775bfc589b82",
"assets/assets/work/quiz/mokup/5.png": "6029f162918a8bd397815cd23a65a9e2",
"assets/assets/work/quiz/mokup/6.png": "45258daef0b26d7356704c7ff5e2e6c6",
"assets/assets/work/quiz/mokup/7.png": "2986a2921b3d6c6e2f825b1768be76b6",
"assets/assets/work/quiz/mokup/8.png": "09db2268b048ca44de83f6993b9e33a7",
"assets/assets/work/quiz/mokup/9.png": "d92d5e06a1fd35ced3e08bead39d2494",
"assets/assets/work/reastaurant/1.png": "ffe9b3b1506e1d1779375d56386b4701",
"assets/assets/work/reastaurant/10.png": "356bc54974b195e632b78402b59ce680",
"assets/assets/work/reastaurant/11.png": "c686d62c44cfc5a752f72be215d988b9",
"assets/assets/work/reastaurant/12.png": "8479b6274e5c71f986fa23eae6477cc7",
"assets/assets/work/reastaurant/13.png": "8ec9fab0ea941ca0be0c21b4e78baa8f",
"assets/assets/work/reastaurant/2.png": "af5a25a787c532514f127864b51f8c4e",
"assets/assets/work/reastaurant/3.png": "6369f91929a7ac69436e9a78b5fe7005",
"assets/assets/work/reastaurant/4.png": "d5fc74be0da7b089350240645315326d",
"assets/assets/work/reastaurant/5.png": "45fb9c8f5a303c44aac98299fc9586c7",
"assets/assets/work/reastaurant/6.png": "5bc54f40d91c9df9cf9f626f34c8d74b",
"assets/assets/work/reastaurant/7.png": "9e807dc49bf5591f6325de760ccedc67",
"assets/assets/work/reastaurant/8.png": "5c6c1cae8bdbf645fb9e4cf32dd7f48a",
"assets/assets/work/reastaurant/9.png": "ca19b420123eeaad1dfde05864d12a97",
"assets/assets/work/reastaurant/reastaurant_banner1.png": "6058865f97f581815cc2e54fc267566d",
"assets/assets/work/reastaurant/reastaurant_logo.png": "0cad2c4b07f4b9f7f13b0a307eaa601a",
"assets/assets/work/ss1.jpg": "00f07c402c3da120228e7d6246b9101c",
"assets/assets/work/ss2.jpg": "6439f3bbc11e729c1e0b700114775bb2",
"assets/assets/work/ss3.jpg": "958cf53cd2eb3ad2794e48a9dd96a98a",
"assets/assets/work/ss4.jpg": "af2179fa719f156a5b4bc0def4493b61",
"assets/assets/work/ss5.jpg": "4f5d278e3fb3f6237658256dec2052aa",
"assets/assets/work/ss6.jpg": "4e0cc333ebebe2afa643badf165c6de4",
"assets/assets/work/ss7.jpg": "fab0831e3e2d759cdec1e1e02f0ba260",
"assets/assets/work/ss8.jpg": "946776fa786ca303c87652346280b25b",
"assets/assets/work/ss9.png": "e071445dc2fc71f660de1384d425c9fe",
"assets/assets/work/st.png": "0957bd1682c5a518247a1844656c0f7e",
"assets/assets/work/utu1.png": "1a6417aa4f66fb4481107af5468dfd8f",
"assets/assets/work/utu2.gif": "a5e97491144fb517e42a521dda592456",
"assets/assets/work/utu3.png": "a2187c9c60f4af1eeebd4c7bd1d9a657",
"assets/assets/work/utu4.png": "a6517cb24a5f7fe9617017b7812b0f28",
"assets/assets/work/utu5.png": "b286abe758264742802f705b6089e994",
"assets/assets/work/woocom/1.png": "8364a461c8cc0767793541dccb489829",
"assets/assets/work/woocom/10.png": "ecf90f75fcfa1cb4fd8707a94d9a83f1",
"assets/assets/work/woocom/11.png": "ef76aea13c6942d4c3df72098ead57b9",
"assets/assets/work/woocom/12.png": "604b0a0d6d961274bf731ea63629b7b5",
"assets/assets/work/woocom/13.png": "861438df8af116a635353ad0d48aebdc",
"assets/assets/work/woocom/14.png": "3c4136b1ee7a78d7c0f1f7677e5638c0",
"assets/assets/work/woocom/15.png": "3c54e391224de53c22ba6e83cc09a2fc",
"assets/assets/work/woocom/16.png": "39a12eba689b283cd3622d9f28701e76",
"assets/assets/work/woocom/17.png": "4c2fd928f61c09ae8acf63c8367d335f",
"assets/assets/work/woocom/18.png": "ef76aea13c6942d4c3df72098ead57b9",
"assets/assets/work/woocom/19.png": "824d79ce41fdb162d86cc24f5f040f18",
"assets/assets/work/woocom/2.png": "264b3a348a28da6653ffa1f2c38ba802",
"assets/assets/work/woocom/20.png": "2ef025f8d3179f9a6ba4ead5f0f0a484",
"assets/assets/work/woocom/21.png": "2ac2efea6efcf980823c6a2b3589f90f",
"assets/assets/work/woocom/22.png": "831b6ed590ab9dd885561ac194fd2e51",
"assets/assets/work/woocom/23.png": "7986dc68940260f48d556617684c129c",
"assets/assets/work/woocom/3.png": "e16081e858b0749d6fb0604122f425a8",
"assets/assets/work/woocom/4.png": "be32f17c20dfdc422c313797bf7af89c",
"assets/assets/work/woocom/5.png": "2eda7ae60d4be183a3ecb1e67706b3d7",
"assets/assets/work/woocom/6.png": "fa200f8d229f5079a7a0e7c1f0b728e7",
"assets/assets/work/woocom/7.png": "d0525be92c8d4bbbf76f1ca1bee7d1d2",
"assets/assets/work/woocom/8.png": "3db559b33778e22a0dd7ac63fac21099",
"assets/assets/work/woocom/9.png": "43b80bb3ae2ee6647da3a2c68ab53a04",
"assets/assets/work/woocom/woocom_banner1.png": "1a484b51b09a179c3b560e3b562cb1d3",
"assets/assets/work/woocom/woocom_banner2.png": "dc19fe942bf1332b4978b365dc4a34c6",
"assets/assets/work/woocom/woocom_logo1.png": "d560f6cc32a5ae863cfd917e0b15c27c",
"assets/assets/work/woocom/woocom_logo2.png": "a4df16634ddb186305f0bcd9b4270ba8",
"assets/data.json": "acea25f2346b462daf0e02a98366ca37",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "36bbcf71be04a878eeb0ed24c2fd3537",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "216c98d6ce226450b7bdfd9190502d7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "3f07505f0d3566dcbbb6c6a0db99e3d5",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "3f07505f0d3566dcbbb6c6a0db99e3d5",
"icons/Icon-512.png": "3f07505f0d3566dcbbb6c6a0db99e3d5",
"icons/Icon-maskable-192.png": "3f07505f0d3566dcbbb6c6a0db99e3d5",
"icons/Icon-maskable-512.png": "3f07505f0d3566dcbbb6c6a0db99e3d5",
"index.html": "8183bdbca522a44c40fe5b99cf15b275",
"/": "8183bdbca522a44c40fe5b99cf15b275",
"main.dart.js": "33363f0777de02a4366e5fe6bdde306f",
"manifest.json": "a23e318171aae9a0cc6f5cba12ddd308",
"version.json": "5b8137b2e7db494d15dc0e0d4b164cc6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
