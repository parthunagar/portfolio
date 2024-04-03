import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:parth_portfolio/configs/configs.dart';
import 'package:parth_portfolio/constants.dart';
import 'package:parth_portfolio/provider/app_provider.dart';
import 'package:parth_portfolio/utils/project_utils.dart';
import 'package:parth_portfolio/utils/utils.dart';
import 'package:parth_portfolio/widget/custom_text_heading.dart';
import 'package:parth_portfolio/widget/project_card.dart';
import 'package:provider/provider.dart';

class PortfolioMobileTab extends StatelessWidget {
  const PortfolioMobileTab({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double height = MediaQuery.of(context).size.height;
    final appProvider = Provider.of<AppProvider>(context);
    return Column(
      children: [
        const CustomSectionHeading(
          text: "\nPortfolio",
        ),
        const CustomSectionSubHeading(
          text: "Here are few samples of my previous work :)\n\n",
        ),
        CarouselSlider.builder(
          itemCount: ProjectUtils.titles.length,
          itemBuilder: (BuildContext context, int itemIndex, int i) => Padding(
            padding: const EdgeInsets.symmetric(vertical: 15.0),
            child: ProjectCard(
              projectIcon: ProjectUtils.icons[i],
              projectLink: ProjectUtils.links[i],
              projectTitle: ProjectUtils.titles[i],
              projectDescription: ProjectUtils.description[i],
            ),
          ),
          options: CarouselOptions(
            height: height * 0.4,
            autoPlay: true,
            autoPlayInterval: const Duration(seconds: 5),
            enlargeCenterPage: true,
            autoPlayCurve: Curves.fastOutSlowIn,
            autoPlayAnimationDuration: const Duration(milliseconds: 800),
            enableInfiniteScroll: false,
          ),
        ),
        Space.y!,
        SizedBox(
          height: AppDimensions.normalize(14),
          width: AppDimensions.normalize(50),
          child: OutlinedButton(
            style: ButtonStyle(
              side: MaterialStateProperty.all(
                BorderSide(
                  color: appProvider.isDark ? Colors.white : Colors.black,
                  width: 1.0,
                  style: BorderStyle.solid,
                ),
              ),
            ),
            onPressed: () => openURL(StaticUtils.gitHub),
            child: Text(
              'See More',
              style: AppText.l1b!.copyWith(
                color: appProvider.isDark ? Colors.white : Colors.black,
              ),
            ),
          ),
        )
      ],
    );
  }
}
