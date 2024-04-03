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

class AboutTab extends StatelessWidget {
  const AboutTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    double width = MediaQuery.of(context).size.width;
    final appProvider = Provider.of<AppProvider>(context);
    return Container(
      padding: Space.h,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Center(
            child: CustomSectionHeading(
              text: '\nAbout Me',
            ),
          ),
          const Center(
            child: CustomSectionSubHeading(
              text: 'Get to know me :)',
            ),
          ),
          Space.y1!,
          Image.asset(
            StaticUtils.mobilePhoto,
            height: height * 0.27,
          ),
          SizedBox(
            height: height * 0.03,
          ),
          Text(
            "Who am I?",
            style: AppText.b2!.copyWith(
              // color: AppTheme.c!.primary,
              color: appProvider.isDark ? Colors.white : Colors.black,
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
          Row(
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
          Space.y!,
          Row(
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AboutMeData(
                    data: "Name",
                    information: "Parth Unagar",
                  ),
                  AboutMeData(
                    data: "Age",
                    information: "26",
                  ),
                ],
              ),
              SizedBox(
                width: width > 710 ? width * 0.2 : width * 0.05,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  AboutMeData(
                    data: "Email",
                    information: "parthunagar9@gmail.com",
                    onTap: () {
                                  launchEmailSubmission();
                                 },
                  ),
                  AboutMeData(
                    data: "From",
                    information: "Attock, PK",
                  ),
                ],
              ),
            ],
          ),
          Space.y1!,
          Row(
            children: [
              SizedBox(
                height: AppDimensions.normalize(13),
                width: AppDimensions.normalize(40),
                child: OutlinedButton(
                  onPressed: () => html.window.open(StaticUtils.resume, 'pdf'),
                  child: Text(
                    "Resume",
                    style: AppText.b2!.copyWith(
                      // color: AppTheme.c!.primary,
                      color: appProvider.isDark ? Colors.white : Colors.black,
                    ),
                  ),
                ),
              ),
              Space.x!,
              Container(
                width: width * 0.05,
                decoration: BoxDecoration(
                  border: Border(
                    bottom: BorderSide(
                      color: Colors.grey[900]!,
                      width: 2.0,
                    ),
                  ),
                ),
              ),
              SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
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
              ),
            ],
          )
        ],
      ),
    );
  }
}
