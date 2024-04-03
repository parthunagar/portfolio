import 'package:url_launcher/url_launcher.dart';
import 'package:mailto/mailto.dart';

// URL Launcher
void openURL(String url) => launchUrl(Uri.parse(url));

launchPhone() async {
  final Uri launchUri = Uri(
    scheme: 'tel',
    path: '+91 7203804141',
  );
  await launchUrl(launchUri);
}

void launchEmailSubmission() async {
  // final Uri params = Uri(
  //   scheme: 'mailto',
  //   path: 'parthunagar9@gmail.com',
  // );
  // String url = params.toString();
  // if (await canLaunchUrl(Uri.parse(url))) {
  //   await launchUrl(Uri.parse(url));
  // } else {
  //   print('Could not launch $url');
  // }
  final mailtoLink = Mailto(
    to: ['parthunagar9@gmail.com'],
    // cc: ['cc1@example.com', 'cc2@example.com'],
    // subject: 'mailto example subject',
    // body: 'mailto example body',
  );
  await launchUrl(Uri.parse('$mailtoLink'));
}

// Tools & Tech
final kTools = [
  "Flutter",
  "Dart",
  "Android",
  "IOS",
  // "Swift",
  // "Java",
  // "Kotlin",
];
