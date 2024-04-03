import 'package:flutter/foundation.dart';
import 'package:parth_portfolio/configs/configs.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:parth_portfolio/utils/about_utils.dart';
import 'package:parth_portfolio/utils/utils.dart';
import 'package:parth_portfolio/utils/work_utils.dart';

import 'package:parth_portfolio/widget/custom_text_heading.dart';
import 'package:provider/provider.dart';
import 'package:universal_html/html.dart' as html;

import 'package:flutter/material.dart';
import 'package:parth_portfolio/constants.dart';
import 'package:parth_portfolio/widget/about_me_data.dart';
import 'package:parth_portfolio/widget/community_button.dart';
import 'package:parth_portfolio/widget/tech_widget.dart';

class AboutMobile extends StatelessWidget {
  const AboutMobile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    final appProvider = Provider.of<AppProvider>(context);
    return Container(
      padding: Space.h,
      child: Column(
        children: [
          const CustomSectionHeading(
            text: '\nAbout Me',
          ),
          const CustomSectionSubHeading(
            text: 'Get to know me :)',
          ),
          Space.y1!,
          // Image.asset(
          //   StaticUtils.mobilePhoto,
          //   height: height * 0.27,
          // ),
          Container(
            height: height * 0.27,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: Colors.red, width: 2),
              image: const DecorationImage(
                image: AssetImage(StaticUtils.profile25),
              ),
            ),
          ),
          // Image.asset(
          //   StaticUtils.profile26,
          //   height: height * 0.27,
          // ),
          SizedBox(
            height: height * 0.03,
          ),
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              "Who am I?",
              style: AppText.b2!.copyWith(
                // color: AppTheme.c!.primary,
                color: appProvider.isDark ? Colors.white : Colors.black,
              ),
            ),
          ),
          Space.y1!,
          Text(
            AboutUtils.aboutMeHeadline,
            style: AppText.b2b!.copyWith(
              fontFamily: 'Montserrat',
              color: appProvider.isDark ? Colors.white : Colors.black,
            ),
          ),
          SizedBox(
            height: height * 0.02,
          ),
          Text(
            AboutUtils.aboutMeDetail,
            style: AppText.l1!.copyWith(
              height: 2,
              letterSpacing: 1.1,
              fontFamily: 'Montserrat',
              color: appProvider.isDark ? Colors.white : Colors.black,
            ),
          ),
          Space.y!,
          Divider(
            color: Colors.grey[800],
            thickness: AppDimensions.normalize(0.5),
          ),
          Space.y!,
          Text(
            'Technologies I have worked with:',
            style: AppText.l1!.copyWith(
              // color: AppTheme.c!.primary,
              color: appProvider.isDark ? Colors.white : Colors.black,
            ),
          ),
          Space.y!,
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: kTools
                .map(
                  (e) => ToolTechWidget(techName: e),
                )
                .toList(),
          ),
          Space.y!,
          Divider(
            color: Colors.grey[800],
            thickness: AppDimensions.normalize(0.5),
          ),
          SizedBox(
            height: height * 0.02,
          ),
          AboutMeData(
            data: "Name",
            information: "Parth Unagar",
          ),
          AboutMeData(
            data: "Email",
            information: "parthunagar9@gmail.com",
            onTap: () {
              launchEmailSubmission();
            },
          ),
          Space.y!,
          OutlinedButton(
              child: Text(
                "Resume",
                style: AppText.b2!.copyWith(
                  color: appProvider.isDark ? Colors.white : Colors.black,
                ),
              ),
              onPressed: () {
                kIsWeb
                    ? html.window.open(StaticUtils.resume, "pdf")
                    : openURL(StaticUtils.resume);
              }),
          Space.y!,
          Wrap(
              alignment: WrapAlignment.center,
              crossAxisAlignment: WrapCrossAlignment.center,
              children: WorkUtils.logos
                  .asMap()
                  .entries
                  .map(
                    (e) => CommunityIconBtn(
                      icon: e.value,
                      link: WorkUtils.communityLinks[e.key],
                      height: WorkUtils.communityLogoHeight[e.key],
                    ),
                  )
                  .toList()),
        ],
      ),
    );
  }
}
