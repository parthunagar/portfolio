import 'package:flutter/material.dart';
import 'package:parth_portfolio/configs/app_typography.dart';
import 'package:parth_portfolio/constants.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:provider/provider.dart';

class Footer extends StatelessWidget {
  const Footer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    final appProvider = Provider.of<AppProvider>(context);
    return Container(
      margin: EdgeInsets.fromLTRB(0, height * 0.05, 0, 0),
      height: height * 0.07,
      width: width,
      child: Center(
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              "Developed in 💙 with ",
              style: AppText.l1!.copyWith(
                fontSize: 14,
                color: appProvider.isDark ? Colors.white : Colors.black,
              ),
            ),
            InkWell(
              // onTap: () => openURL("https://github.com/mhmzdev/DevFolio"),
              onTap: () => openURL("https://docs.flutter.dev/get-started/install"),
              child: const Text(
                "Flutter",
                style: TextStyle(color: Colors.blue),
              ),
            )
          ],
        ),
      ),
    );
  }
}
