import 'package:parth_portfolio/configs/date_ext.dart';

class AboutUtils {
  static const String aboutMeHeadline =
      // 'I\'m Parth Unagar, a Flutter developer, Technical blog writer and UI designer.';
      // 'I\'m Parth Unagar, A Flutter developer & UI designer, Android and IOS Enthusiastic and Eager to learn new technologies in App development.';
      'I\'m Parth Unagar, A Flutter developer & UI designer.';

  static String aboutMeDetail =
      // 'I\'m a Fresh Graduate with Computer Science as Majors from COMSATS University, Islamabad. I have been developing mobile apps for over 2 years now. I have worked in teams for various startups and helped them in launching their prototypes and got valuable learning experience. Been a former  Google Developer Student Clubs (DSC) lead and also CEO/Co-Founder Flutter Islamabad, Pakistan. Currently working as Associate Software Engineer at Sastaticket.pk';
      // 'I\'m a Fresh Postgraduate with Master of Computer Application as Majors from SRIMCA at Uka Tarsadia University, Bardoli, Gujarat.' +
      //     ' I have been developing mobile apps for over ${SuperDate(DateTime.now()).findToalExperience()} years now.' +
      //     ' I have worked in teams for various startups and helped them in launching their prototypes and got valuable learning experience.' +
      //     ' Been a former Associate Developer and also Senior Developer Surat, India. Currently working as Team Lead Software Engineer at Ahmedabad, India';
      // ignore: prefer_interpolation_to_compose_strings
      'I\'m a fresh postgraduate with a Master\'s in Computer Applications from SRIMCA at Uka Tarsadia University, Bardoli, Gujarat.'
      ' I have been developing mobile apps for over ${SuperDate(DateTime.now()).findTotalExperience()} years.'
      ' Throughout my career, I have worked in teams for various startups, helping them launch their prototypes,'
      ' gaining valuable learning experiences. I have previously worked as an Associate Developer and later as a '
      'Senior Developer in Surat, India. Currently, I am working as a Team Lead Software Engineer in Ahmedabad, India.';
}
