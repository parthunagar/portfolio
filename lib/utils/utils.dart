import 'package:flutter/material.dart';
import 'package:parth_portfolio/sections/about/about.dart';
import 'package:parth_portfolio/sections/contact/contact.dart';
import 'package:parth_portfolio/sections/home/home.dart';
import 'package:parth_portfolio/sections/portfolio/portfolio.dart';
import 'package:parth_portfolio/sections/services/services.dart';
import 'package:parth_portfolio/widget/footer.dart';

class StaticUtils {
  static const String hi = 'assets/hi.gif';

  // photos
  static const String mobilePhoto = 'assets/photos/mobile.png';
  static const String coloredPhoto = 'assets/photos/colored.png';
  static const String blackWhitePhoto = 'assets/photos/black-white.png';
  static const String profile1 = 'assets/photos/profile1.png';
  static const String profile2 = 'assets/photos/profile2.png';
  static const String profile3 = 'assets/photos/profile3.png';
  static const String profile4 = 'assets/photos/profile4.png';
  static const String profile5 = 'assets/photos/profile5.png';
  static const String profile6 = 'assets/photos/profile6.png';
  static const String profile7 = 'assets/photos/profile7.png';
  static const String profile8 = 'assets/photos/profile8.png';
  static const String profile9 = 'assets/photos/profile9.png';
  static const String profile10 = 'assets/photos/profile10.png';
  static const String profile11 = 'assets/photos/profile11.png';
  static const String profile12 = 'assets/photos/profile12.png';
  static const String profile13 = 'assets/photos/profile13.png';
  static const String profile14 = 'assets/photos/profile14.png';
  static const String profile15 = 'assets/photos/profile15.png';
  static const String profile16 = 'assets/photos/profile16.png';
  static const String profile17 = 'assets/photos/profile17.png';
  static const String profile18 = 'assets/photos/profile18.png';
  static const String profile19 = 'assets/photos/profile19.png';
  static const String profile20 = 'assets/photos/profile20.png';
  static const String profile21 = 'assets/photos/profile21.JPG';
  static const String profile22 = 'assets/photos/profile22.jpg';
  static const String profile23 = 'assets/photos/profile23.jpg';
  static const String profile24 = 'assets/photos/profile24.jpg';
  static const String profile25 = 'assets/photos/profile25.png';
  static const String profile26 = 'assets/photos/profile26.jpg';
  static const String profile27 = 'assets/photos/profile27.JPG';

  // work
  static const String dsc = 'assets/work/dsc.png';
  static const String sastaticket = 'assets/work/st.png';
  static const String dashatar = 'assets/work/flutter_dashtar.png';
  static const String university = 'assets/work/cui.png';
  static const String fullterIsb = 'assets/work/flutterIsl.png';
  static const String utu1 = 'assets/work/utu1.png';
  static const String utu2 = 'assets/work/utu2.gif';
  static const String utu3 = 'assets/work/utu3.png';
  static const String utu4 = 'assets/work/utu4.png';
  static const String utu5 = 'assets/work/utu5.png';

  // services
  static const String uiux = 'assets/services/ui.png';
  static const String blog = 'assets/services/blog.png';
  static const String appDev = 'assets/services/app.png';
  static const String rapid = 'assets/services/rapid.png';
  static const String openSource = 'assets/services/open.png';
  static const String openSourceBlack = 'assets/services/open_b.png';

  static const List<String> socialIconURL = [
    "https://img.icons8.com/metro/208/ffffff/facebook-new--v2.png",
    "https://img.icons8.com/ios-glyphs/480/ffffff/instagram-new.png",
    // "https://img.icons8.com/android/480/ffffff/twitter.png",
    "https://img.icons8.com/material-rounded/500/ffffff/twitterx.png",
    "https://img.icons8.com/metro/308/ffffff/linkedin.png",
    "https://img.icons8.com/material-rounded/384/ffffff/github.png",
    "https://img.icons8.com/ios-filled/500/ffffff/medium-monogram--v1.png"
  ];

  static const List<String> socialLinks = [
    // "https://facebook.com/mhmzdev",
    // "https://instagram.com/mhmzdev",
    // "https://twitter.com/mhmzdev",
    // "https://linkedin.com/in/mhmzdev",
    // "https://github.com/mhmzdev",
    // "https://mhmzdev.medium.com"
     "https://www.facebook.com/parth.unagar.9",
    "https://www.instagram.com/parth_unagar/",
    "https://twitter.com/parthunagar1",
    "https://www.linkedin.com/in/parth-unagar-154a88166/",
    "https://github.com/parthunagar?tab=repositories",
    "https://medium.com/@parthunagar9"
  ];

  static const String resume =
      // 'https://drive.google.com/file/d/1bDNNrkQtNVJbXcdwMSx0crQQvAF_nMwV/view?usp=sharing';
      "https://drive.google.com/file/d/1eChdYPMy9nqWnRpfhPhUd2d5etb34__N/view?usp=drive_link";

  static const String gitHub = 'https://github.com/parthunagar';
}

class BodyUtils {
  static const List<Widget> views = [
    HomePage(),
    About(),
    Services(),
    Portfolio(),
    Contact(),
    Footer(),
  ];
}
