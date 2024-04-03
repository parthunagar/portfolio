import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:parth_portfolio/configs/configs.dart';
import 'package:parth_portfolio/provider/app_provider.dart';

import 'package:parth_portfolio/utils/utils.dart';
import 'package:parth_portfolio/widget/social_links.dart';
import 'package:provider/provider.dart';

class HomeMobile extends StatelessWidget {
  const HomeMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;
    final appProvider = Provider.of<AppProvider>(context);
    return SizedBox(
      height: size.height * 1.02,
      child: Stack(
        children: [
          Positioned(
            // bottom: 0.0,
            bottom: 30.0,
            // right: -AppDimensions.normalize(25),
            right: -AppDimensions.normalize(0),
            child: Opacity(
              opacity: 0.9,
              child: Image.asset(
                // appProvider.isDark ? StaticUtils.profile14 : StaticUtils.profile15,
                StaticUtils.profile20,
                // StaticUtils.blackWhitePhoto,
                // height: AppDimensions.normalize(150),
                height: AppDimensions.normalize(200),
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.fromLTRB(
              AppDimensions.normalize(10),
              AppDimensions.normalize(40),
              0,
              0,
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Text(
                      "HEY THERE! ",
                      style: AppText.b2!.copyWith(
                        fontFamily: 'Montserrat',
                        color: appProvider.isDark ? Colors.white : Colors.black,
                      ),
                    ),
                    Space.x!,
                    Image.asset(
                      StaticUtils.hi,
                      height: AppDimensions.normalize(10),
                    ),
                  ],
                ),
                Space.y!,
                Text(
                  "Parth",
                  style: AppText.h3!.copyWith(
                    fontFamily: 'Montserrat',
                    fontWeight: FontWeight.w100,
                    color: appProvider.isDark ? Colors.white : Colors.black,
                  ),
                ),
                Text(
                  "Unagar",
                  style: AppText.h3b!.copyWith(
                    height: 1,
                    color: appProvider.isDark ? Colors.white : Colors.black,
                  ),
                ),
                Space.y!,
                Row(
                  children: [
                    Icon(
                      Icons.play_arrow_rounded,
                      color: AppTheme.c!.primary!,
                    ),
                    AnimatedTextKit(
                      animatedTexts: [
                        TyperAnimatedText(
                          ' Flutter Developer',
                          speed: const Duration(milliseconds: 50),
                          textStyle: AppText.b1!.copyWith(
                            color: !appProvider.isDark
                                ? Colors.black
                                : Colors.white,
                          ),
                        ),
                        TyperAnimatedText(
                          ' Android & IOS Enthusiastic ',
                          speed: const Duration(milliseconds: 50),
                          textStyle: AppText.b1!.copyWith(
                            color: !appProvider.isDark
                                ? Colors.black
                                : Colors.white,
                          ),
                        ),
                        TyperAnimatedText(
                          // ' A friend :)',
                          "Eager to learn new Tech.",
                          speed: const Duration(milliseconds: 50),
                          textStyle: AppText.b1!.copyWith(
                            color: !appProvider.isDark
                                ? Colors.black
                                : Colors.white,
                          ),
                        ),
                      ],
                      repeatForever: true,
                      isRepeatingAnimation: true,
                    ),
                  ],
                ),
                Space.y!,
                const SocialLinks(),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
