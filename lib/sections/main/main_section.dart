import 'package:parth_portfolio/animations/entrance_fader.dart';
import 'package:parth_portfolio/configs/app.dart';
import 'package:parth_portfolio/configs/configs.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:parth_portfolio/provider/drawer_provider.dart';
import 'package:parth_portfolio/provider/scroll_provider.dart';
import 'package:parth_portfolio/responsive/responsive.dart';
import 'package:parth_portfolio/utils/navbar_utils.dart';
import 'package:parth_portfolio/utils/utils.dart';
import 'package:parth_portfolio/widget/navbar_actions_button.dart';
import 'package:parth_portfolio/widget/navbar_logo.dart';
import 'package:provider/provider.dart';
import 'package:universal_html/html.dart' as html;
import 'package:flutter/material.dart';
import 'package:parth_portfolio/constants.dart';
import 'package:parth_portfolio/widget/arrow_on_top.dart';
// import 'package:firebase_auth/firebase_auth.dart';
// import 'package:parth_portfolio/provider/portfolio_provider.dart';
part 'widgets/_navbar_desktop.dart';
part 'widgets/_mobile_drawer.dart';
part 'widgets/_body.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  /*
  callAuth() async {
    // await FirebaseAuth.instance.signInAnonymously();
    try {
      UserCredential user = await FirebaseAuth.instance.signInWithCredential(
        EmailAuthProvider.credential(email: 'parthunagar9@gmail.com', password: 'Arjun@4141'),
      );
      print('callAuth => user : ${user.user?.displayName}');
      return user;
    } catch (e) {
      print('callAuth => ERROR : $e');
    }
  } */

  @override
  void initState() {
    super.initState();
    // callAuth();
    // WidgetsBinding.instance.addPostFrameCallback((_) {
    //   Provider.of<PortfolioProvider>(context, listen: false).fetchPortfolio();
    // });
  }

  @override
  Widget build(BuildContext context) {
    App.init(context);
    final drawerProvider = Provider.of<DrawerProvider>(context);
    // final provider = Provider.of<PortfolioProvider>(context);

    return Scaffold(
      key: drawerProvider.key,
      extendBodyBehindAppBar: true,
      drawer: !Responsive.isDesktop(context) ? _MobileDrawer() : null,
      body: SafeArea(
        child: Stack(
          children: [
            _Body(),
            const ArrowOnTop(),
            Responsive.isTablet(context) || Responsive.isMobile(context)
                ? _NavBarTablet()
                : _NavbarDesktop(),
          ],
        ),
      ),
    );
  }
}
