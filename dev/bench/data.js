window.BENCHMARK_DATA = {
  "lastUpdate": 1592319062253,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "mpowelson@users.noreply.github.com",
            "name": "Matthew Powelson",
            "username": "mpowelson"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c182d31f6805102ee46fcf93425394d9cf33fe88",
          "message": "Add colcon.pkg files to all packages (#303)\n\n* Add colcon.pkg files to all packages\r\n\r\nAddresses issue #302 as discussed on rosdep issue 724.\r\n\r\n* tesseract_collision: Remove pluginlib workaround\r\n\r\nThis is now handled in the tesseract_configure_package macro\r\n\r\n* Add benchmark to the xenial nightly build skip keys",
          "timestamp": "2020-06-16T09:03:45-05:00",
          "tree_id": "4d274dfdc3dc7a3f9ad730e648d1adca4c358a82",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/c182d31f6805102ee46fcf93425394d9cf33fe88"
        },
        "date": 1592319060778,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 61.297842310289475,
            "unit": "us/iter",
            "extra": "iterations: 10527\ncpu: 61.29339165954213 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 64.02694503730864,
            "unit": "us/iter",
            "extra": "iterations: 10589\ncpu: 64.00485031636605 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 63.55751262878333,
            "unit": "us/iter",
            "extra": "iterations: 10967\ncpu: 63.552599343484985 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 66.4658923854071,
            "unit": "us/iter",
            "extra": "iterations: 10296\ncpu: 65.67510994560999 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 75.4761746543723,
            "unit": "us/iter",
            "extra": "iterations: 8680\ncpu: 75.45780771889399 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 96.61108821501988,
            "unit": "us/iter",
            "extra": "iterations: 7255\ncpu: 96.59128849069614 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 140.65952396231333,
            "unit": "us/iter",
            "extra": "iterations: 4987\ncpu: 139.97978022859436 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 243.31289124671548,
            "unit": "us/iter",
            "extra": "iterations: 3016\ncpu: 243.30074933687013 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 521.5180996390122,
            "unit": "us/iter",
            "extra": "iterations: 1385\ncpu: 521.5115155234653 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1542.4617672422378,
            "unit": "us/iter",
            "extra": "iterations: 464\ncpu: 1542.3607262931055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.356966467839272,
            "unit": "us/iter",
            "extra": "iterations: 156417\ncpu: 4.356876215500874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.55856688543711,
            "unit": "us/iter",
            "extra": "iterations: 104522\ncpu: 6.557022158014578 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 43.069573030317606,
            "unit": "us/iter",
            "extra": "iterations: 16500\ncpu: 43.06672769696965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 23.151651805798597,
            "unit": "us/iter",
            "extra": "iterations: 30236\ncpu: 23.150193974070646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.885165593563008,
            "unit": "us/iter",
            "extra": "iterations: 143043\ncpu: 4.884153324524797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.52061375125342,
            "unit": "us/iter",
            "extra": "iterations: 99700\ncpu: 6.508817893681045 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.8342536806962135,
            "unit": "us/iter",
            "extra": "iterations: 145285\ncpu: 4.832173521010423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 73.89584125697687,
            "unit": "us/iter",
            "extra": "iterations: 9865\ncpu: 73.89110886974164 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 73.85532509281992,
            "unit": "us/iter",
            "extra": "iterations: 9425\ncpu: 73.85499554376665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.311672503197635,
            "unit": "us/iter",
            "extra": "iterations: 129015\ncpu: 5.310970577064683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 44.906894563536504,
            "unit": "us/iter",
            "extra": "iterations: 16095\ncpu: 44.90588033550806 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 73.08808653941924,
            "unit": "us/iter",
            "extra": "iterations: 9799\ncpu: 73.07479018267156 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5593665443180673,
            "unit": "us/iter",
            "extra": "iterations: 1252708\ncpu: 0.5593389489010996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.617748907871346,
            "unit": "us/iter",
            "extra": "iterations: 1153939\ncpu: 0.617716058647812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 12.509853475128104,
            "unit": "us/iter",
            "extra": "iterations: 54257\ncpu: 12.507158523324167 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 26.535981599658715,
            "unit": "us/iter",
            "extra": "iterations: 26793\ncpu: 26.53549636098986 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 76.72582572305443,
            "unit": "us/iter",
            "extra": "iterations: 9439\ncpu: 76.70781926051471 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.642269787335967,
            "unit": "us/iter",
            "extra": "iterations: 1081563\ncpu: 0.6422662951672713 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6080899510252684,
            "unit": "us/iter",
            "extra": "iterations: 1181832\ncpu: 0.6079945838325579 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 78.65307633168422,
            "unit": "us/iter",
            "extra": "iterations: 9105\ncpu: 78.64828336079091 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.552399155683409,
            "unit": "us/iter",
            "extra": "iterations: 128862\ncpu: 5.552217488476029 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.4662300309182505,
            "unit": "us/iter",
            "extra": "iterations: 130339\ncpu: 5.4650855001189385 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 12.676960051870982,
            "unit": "us/iter",
            "extra": "iterations: 51667\ncpu: 12.677009561228681 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 76.33593987098443,
            "unit": "us/iter",
            "extra": "iterations: 9147\ncpu: 76.3318150213187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.190122461305398,
            "unit": "us/iter",
            "extra": "iterations: 153967\ncpu: 4.194283261997696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.170737216665296,
            "unit": "us/iter",
            "extra": "iterations: 170867\ncpu: 4.16963693398962 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.577437889752732,
            "unit": "us/iter",
            "extra": "iterations: 103912\ncpu: 6.577468126876628 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 41.85134275362741,
            "unit": "us/iter",
            "extra": "iterations: 16560\ncpu: 41.84440682367143 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 23.405182714956766,
            "unit": "us/iter",
            "extra": "iterations: 29702\ncpu: 23.40342337216341 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.759036318896965,
            "unit": "us/iter",
            "extra": "iterations: 145489\ncpu: 4.743171628095573 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.626032142821787,
            "unit": "us/iter",
            "extra": "iterations: 107769\ncpu: 6.625087557646413 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.686451176300952,
            "unit": "us/iter",
            "extra": "iterations: 151832\ncpu: 4.6848193924864425 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 72.23872851523663,
            "unit": "us/iter",
            "extra": "iterations: 9658\ncpu: 72.23725450403816 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 70.81050832385667,
            "unit": "us/iter",
            "extra": "iterations: 9671\ncpu: 70.80318570985374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.21923046826537,
            "unit": "us/iter",
            "extra": "iterations: 129072\ncpu: 5.218610480971823 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 42.31726459191058,
            "unit": "us/iter",
            "extra": "iterations: 16516\ncpu: 42.314902882053815 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 72.50691339785513,
            "unit": "us/iter",
            "extra": "iterations: 9815\ncpu: 72.48837870606238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5120053261943222,
            "unit": "us/iter",
            "extra": "iterations: 1383915\ncpu: 0.5120080069946467 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5558402579879693,
            "unit": "us/iter",
            "extra": "iterations: 1242228\ncpu: 0.5554841422025595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 11.847215349673878,
            "unit": "us/iter",
            "extra": "iterations: 60757\ncpu: 11.846608028704622 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 26.04703566524971,
            "unit": "us/iter",
            "extra": "iterations: 27674\ncpu: 26.04561765556117 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 72.42812587191247,
            "unit": "us/iter",
            "extra": "iterations: 9462\ncpu: 72.42427827097873 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5426471987594039,
            "unit": "us/iter",
            "extra": "iterations: 1291767\ncpu: 0.5426307368124393 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5413970170315584,
            "unit": "us/iter",
            "extra": "iterations: 1234408\ncpu: 0.5412901909255272 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 77.78398802325495,
            "unit": "us/iter",
            "extra": "iterations: 8767\ncpu: 77.78430135736288 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.4062255339995,
            "unit": "us/iter",
            "extra": "iterations: 126451\ncpu: 5.406255790780579 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.273476812363538,
            "unit": "us/iter",
            "extra": "iterations: 135762\ncpu: 5.272422850282094 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 12.99585655699413,
            "unit": "us/iter",
            "extra": "iterations: 53401\ncpu: 12.99591535739027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 76.84080272621325,
            "unit": "us/iter",
            "extra": "iterations: 9317\ncpu: 76.82242116561153 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.3487953791649145,
            "unit": "us/iter",
            "extra": "iterations: 159192\ncpu: 4.348813099904487 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.375436685746006,
            "unit": "us/iter",
            "extra": "iterations: 161267\ncpu: 4.374422566303084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.708859606852981,
            "unit": "us/iter",
            "extra": "iterations: 104592\ncpu: 6.708725065014498 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 43.440445062052234,
            "unit": "us/iter",
            "extra": "iterations: 16191\ncpu: 43.43024674201707 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 23.498455370538068,
            "unit": "us/iter",
            "extra": "iterations: 29308\ncpu: 23.49857042445754 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.887923653500851,
            "unit": "us/iter",
            "extra": "iterations: 138749\ncpu: 4.886762506396451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.866791886779181,
            "unit": "us/iter",
            "extra": "iterations: 102031\ncpu: 6.866412325665719 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.807820476234749,
            "unit": "us/iter",
            "extra": "iterations: 144382\ncpu: 4.806543107866645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 74.08102561487675,
            "unit": "us/iter",
            "extra": "iterations: 9799\ncpu: 74.07270537810021 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 72.57943288868717,
            "unit": "us/iter",
            "extra": "iterations: 9596\ncpu: 72.57370956648583 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.388006961315379,
            "unit": "us/iter",
            "extra": "iterations: 131297\ncpu: 5.386336648971425 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 42.80925299584956,
            "unit": "us/iter",
            "extra": "iterations: 16356\ncpu: 42.808960014673715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 71.56181569536201,
            "unit": "us/iter",
            "extra": "iterations: 9506\ncpu: 71.54409583420973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5628813964333291,
            "unit": "us/iter",
            "extra": "iterations: 1275965\ncpu: 0.5628541292276842 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5971075841356623,
            "unit": "us/iter",
            "extra": "iterations: 1180174\ncpu: 0.5969827567799342 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 12.636923665582986,
            "unit": "us/iter",
            "extra": "iterations: 57759\ncpu: 12.635629114077544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 25.70395079562984,
            "unit": "us/iter",
            "extra": "iterations: 26583\ncpu: 25.703718617161403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 71.80841203847103,
            "unit": "us/iter",
            "extra": "iterations: 9669\ncpu: 71.7895856862144 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6293328623396576,
            "unit": "us/iter",
            "extra": "iterations: 1082817\ncpu: 0.6293363153700079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.613438633647289,
            "unit": "us/iter",
            "extra": "iterations: 1148781\ncpu: 0.613292999274884 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 75.00379274613182,
            "unit": "us/iter",
            "extra": "iterations: 9264\ncpu: 74.99991008203793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.433644472382092,
            "unit": "us/iter",
            "extra": "iterations: 127270\ncpu: 5.433227657735521 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.4182746720836645,
            "unit": "us/iter",
            "extra": "iterations: 132427\ncpu: 5.415996435772166 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 12.885064625149079,
            "unit": "us/iter",
            "extra": "iterations: 53261\ncpu: 12.884728469236492 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 76.20407987286434,
            "unit": "us/iter",
            "extra": "iterations: 9127\ncpu: 76.18992856360312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.4729230115101695,
            "unit": "us/iter",
            "extra": "iterations: 164635\ncpu: 4.472940954232095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.446253163116848,
            "unit": "us/iter",
            "extra": "iterations: 158388\ncpu: 4.444921357678596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.514825319637372,
            "unit": "us/iter",
            "extra": "iterations: 105902\ncpu: 6.5143811165039756 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 42.89153882915906,
            "unit": "us/iter",
            "extra": "iterations: 16740\ncpu: 42.879605436081484 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 23.51189306821336,
            "unit": "us/iter",
            "extra": "iterations: 28766\ncpu: 23.511563964402423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.78461726936298,
            "unit": "us/iter",
            "extra": "iterations: 135419\ncpu: 4.784091515961544 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.771679528715827,
            "unit": "us/iter",
            "extra": "iterations: 102783\ncpu: 6.7705012502067525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.845653075650343,
            "unit": "us/iter",
            "extra": "iterations: 144311\ncpu: 4.84400756006119 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 75.33586921851084,
            "unit": "us/iter",
            "extra": "iterations: 9405\ncpu: 75.33181924508145 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 71.68094953351141,
            "unit": "us/iter",
            "extra": "iterations: 9432\ncpu: 71.68126346480082 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.371407191041156,
            "unit": "us/iter",
            "extra": "iterations: 126157\ncpu: 5.370272382824583 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 43.609180526459745,
            "unit": "us/iter",
            "extra": "iterations: 15272\ncpu: 43.60841062074348 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 73.88356726273724,
            "unit": "us/iter",
            "extra": "iterations: 9842\ncpu: 73.87188650680653 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5798624087201877,
            "unit": "us/iter",
            "extra": "iterations: 1236997\ncpu: 0.5798303140589635 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6069142298910176,
            "unit": "us/iter",
            "extra": "iterations: 1137774\ncpu: 0.6069076908067893 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 12.287653496546575,
            "unit": "us/iter",
            "extra": "iterations: 54897\ncpu: 12.285122301765227 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 25.974385420882108,
            "unit": "us/iter",
            "extra": "iterations: 27217\ncpu: 25.97451056325079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 71.5512840023711,
            "unit": "us/iter",
            "extra": "iterations: 10014\ncpu: 71.53118484122211 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6159305770761445,
            "unit": "us/iter",
            "extra": "iterations: 1132623\ncpu: 0.6159178800006696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5879495179122913,
            "unit": "us/iter",
            "extra": "iterations: 1154251\ncpu: 0.5879109257865048 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 75.1774261565559,
            "unit": "us/iter",
            "extra": "iterations: 8992\ncpu: 75.17144428380786 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.555084844564253,
            "unit": "us/iter",
            "extra": "iterations: 122141\ncpu: 5.555109119787793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.608529877585535,
            "unit": "us/iter",
            "extra": "iterations: 126784\ncpu: 5.607250536345377 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 12.597606471584232,
            "unit": "us/iter",
            "extra": "iterations: 50065\ncpu: 12.597757395385846 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 75.76393473752877,
            "unit": "us/iter",
            "extra": "iterations: 9163\ncpu: 75.76315889992311 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.455647601370318,
            "unit": "us/iter",
            "extra": "iterations: 158403\ncpu: 4.455137314318537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.616246505775569,
            "unit": "us/iter",
            "extra": "iterations: 153396\ncpu: 4.615171001851451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.851245549099243,
            "unit": "us/iter",
            "extra": "iterations: 91049\ncpu: 7.850566980417154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.4673642645410105,
            "unit": "us/iter",
            "extra": "iterations: 468599\ncpu: 1.467345986653848 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.6080405093667978,
            "unit": "us/iter",
            "extra": "iterations: 421779\ncpu: 1.607856111850038 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.088742285030227,
            "unit": "us/iter",
            "extra": "iterations: 103176\ncpu: 7.088769578196481 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 8.098990522860829,
            "unit": "us/iter",
            "extra": "iterations: 86735\ncpu: 8.097279944659004 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 44.016999433854686,
            "unit": "us/iter",
            "extra": "iterations: 15897\ncpu: 44.0162141913566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.318688512324268,
            "unit": "us/iter",
            "extra": "iterations: 161695\ncpu: 4.317754309038682 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 20.65621924588982,
            "unit": "us/iter",
            "extra": "iterations: 34345\ncpu: 20.65629154170881 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 23.09519208499858,
            "unit": "us/iter",
            "extra": "iterations: 31434\ncpu: 23.08804472863801 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.526978520639061,
            "unit": "us/iter",
            "extra": "iterations: 460442\ncpu: 1.52694964186585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.9425371070979525,
            "unit": "us/iter",
            "extra": "iterations: 181852\ncpu: 3.9415405494577787 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7869636685397687,
            "unit": "us/iter",
            "extra": "iterations: 860026\ncpu: 0.7869678463209225 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7965583090988798,
            "unit": "us/iter",
            "extra": "iterations: 809462\ncpu: 0.796357577007929 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 24.901019154829026,
            "unit": "us/iter",
            "extra": "iterations: 27095\ncpu: 24.89957652703447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.6494849238124674,
            "unit": "us/iter",
            "extra": "iterations: 424809\ncpu: 1.6493756417590084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 19.9074665648134,
            "unit": "us/iter",
            "extra": "iterations: 36653\ncpu: 19.905554661282906 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.7644464881511291,
            "unit": "us/iter",
            "extra": "iterations: 922833\ncpu: 0.7644499427306926 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.7864414225811359,
            "unit": "us/iter",
            "extra": "iterations: 946730\ncpu: 0.7862506807643174 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 27.024284066674788,
            "unit": "us/iter",
            "extra": "iterations: 25318\ncpu: 27.023670827079656 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 8.303214081236765,
            "unit": "us/iter",
            "extra": "iterations: 85234\ncpu: 8.30169408921329 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 23.080288972256795,
            "unit": "us/iter",
            "extra": "iterations: 30387\ncpu: 23.080198571757634 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 28.540154654456508,
            "unit": "us/iter",
            "extra": "iterations: 24267\ncpu: 28.535706061730256 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 28.035629555680224,
            "unit": "us/iter",
            "extra": "iterations: 25545\ncpu: 28.03529794480355 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.3228683679328475,
            "unit": "us/iter",
            "extra": "iterations: 130295\ncpu: 5.321650884531262 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.403223556228889,
            "unit": "us/iter",
            "extra": "iterations: 165833\ncpu: 4.402915668172252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.668008582209248,
            "unit": "us/iter",
            "extra": "iterations: 92517\ncpu: 7.666237037517434 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.3998124727879795,
            "unit": "us/iter",
            "extra": "iterations: 498397\ncpu: 1.399704452474636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.5469516856135548,
            "unit": "us/iter",
            "extra": "iterations: 444319\ncpu: 1.5468857690083202 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.190579187150337,
            "unit": "us/iter",
            "extra": "iterations: 97238\ncpu: 7.188500730167187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 8.114389873179606,
            "unit": "us/iter",
            "extra": "iterations: 85792\ncpu: 8.114430914304268 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 42.52929881176012,
            "unit": "us/iter",
            "extra": "iterations: 16579\ncpu: 42.51800494601656 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.247803412276749,
            "unit": "us/iter",
            "extra": "iterations: 166282\ncpu: 4.247756251428304 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 20.532998725410803,
            "unit": "us/iter",
            "extra": "iterations: 34521\ncpu: 20.527382926334663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.268860878083544,
            "unit": "us/iter",
            "extra": "iterations: 30635\ncpu: 23.268954235351693 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.4997428318414416,
            "unit": "us/iter",
            "extra": "iterations: 448302\ncpu: 1.4993209711310815 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.8266965748537785,
            "unit": "us/iter",
            "extra": "iterations: 184576\ncpu: 3.826559449765949 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7491912178503831,
            "unit": "us/iter",
            "extra": "iterations: 947103\ncpu: 0.7490727798349155 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7621004929148744,
            "unit": "us/iter",
            "extra": "iterations: 897924\ncpu: 0.7621045511646699 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 25.933264000905655,
            "unit": "us/iter",
            "extra": "iterations: 26534\ncpu: 25.92884830783172 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.7212829046420821,
            "unit": "us/iter",
            "extra": "iterations: 415101\ncpu: 1.7211869304096914 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.91871827285077,
            "unit": "us/iter",
            "extra": "iterations: 34253\ncpu: 20.91856111873451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.793995996009562,
            "unit": "us/iter",
            "extra": "iterations: 875127\ncpu: 0.793822224659943 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7866150285379973,
            "unit": "us/iter",
            "extra": "iterations: 890040\ncpu: 0.7865557806390701 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 26.259420204879348,
            "unit": "us/iter",
            "extra": "iterations: 28310\ncpu: 26.251023701872235 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.08794316790943,
            "unit": "us/iter",
            "extra": "iterations: 84125\ncpu: 8.087856202080102 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 23.183565748225394,
            "unit": "us/iter",
            "extra": "iterations: 29978\ncpu: 23.179722730002428 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 28.238617467179083,
            "unit": "us/iter",
            "extra": "iterations: 24526\ncpu: 28.238711897578593 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 26.90415399201465,
            "unit": "us/iter",
            "extra": "iterations: 25839\ncpu: 26.897509539842556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.229386425102577,
            "unit": "us/iter",
            "extra": "iterations: 134955\ncpu: 5.229129331999362 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.386741651102678,
            "unit": "us/iter",
            "extra": "iterations: 160620\ncpu: 4.386074355622106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.640309495419368,
            "unit": "us/iter",
            "extra": "iterations: 90570\ncpu: 7.639727735453244 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.4616179473323474,
            "unit": "us/iter",
            "extra": "iterations: 481130\ncpu: 1.4616266726248273 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.612866576942295,
            "unit": "us/iter",
            "extra": "iterations: 415348\ncpu: 1.612554850390527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.290925471381685,
            "unit": "us/iter",
            "extra": "iterations: 95252\ncpu: 7.28943832150523 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.168926854614387,
            "unit": "us/iter",
            "extra": "iterations: 84667\ncpu: 8.167572088298625 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 44.732910762829505,
            "unit": "us/iter",
            "extra": "iterations: 15823\ncpu: 44.73309239714242 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.245558031270352,
            "unit": "us/iter",
            "extra": "iterations: 167763\ncpu: 4.24482866901523 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 20.285868673361108,
            "unit": "us/iter",
            "extra": "iterations: 35880\ncpu: 20.284438071349125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 22.911694179649928,
            "unit": "us/iter",
            "extra": "iterations: 30737\ncpu: 22.90667241435392 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5147488938129847,
            "unit": "us/iter",
            "extra": "iterations: 429177\ncpu: 1.5147070928777908 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.8691979568931045,
            "unit": "us/iter",
            "extra": "iterations: 181782\ncpu: 3.8683306708033927 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.755546512144638,
            "unit": "us/iter",
            "extra": "iterations: 922415\ncpu: 0.7555407988812056 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7981730121277905,
            "unit": "us/iter",
            "extra": "iterations: 851501\ncpu: 0.7981294596248201 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 26.263133430153484,
            "unit": "us/iter",
            "extra": "iterations: 28232\ncpu: 26.26029512609717 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.7480626046274688,
            "unit": "us/iter",
            "extra": "iterations: 404411\ncpu: 1.7479689177593851 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 20.835075798331978,
            "unit": "us/iter",
            "extra": "iterations: 34196\ncpu: 20.833264358404687 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.822257762824468,
            "unit": "us/iter",
            "extra": "iterations: 861059\ncpu: 0.8222517713652661 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8449654309234342,
            "unit": "us/iter",
            "extra": "iterations: 852901\ncpu: 0.8447346198445078 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 25.783966583962794,
            "unit": "us/iter",
            "extra": "iterations: 25796\ncpu: 25.783858388897645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 8.012057993267861,
            "unit": "us/iter",
            "extra": "iterations: 91821\ncpu: 8.010285686281081 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 22.932543594812337,
            "unit": "us/iter",
            "extra": "iterations: 29281\ncpu: 22.932363648782474 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 28.969396645092274,
            "unit": "us/iter",
            "extra": "iterations: 24561\ncpu: 28.964193314603875 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 26.96601544977989,
            "unit": "us/iter",
            "extra": "iterations: 25502\ncpu: 26.965804211434985 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.4415826611937925,
            "unit": "us/iter",
            "extra": "iterations: 128694\ncpu: 5.441544260027528 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.332457031973333,
            "unit": "us/iter",
            "extra": "iterations: 162074\ncpu: 4.3324749497143396 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.369777641106147,
            "unit": "us/iter",
            "extra": "iterations: 100810\ncpu: 7.369814264457921 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.3905764637058688,
            "unit": "us/iter",
            "extra": "iterations: 511151\ncpu: 1.3905033659329535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.5885972018392407,
            "unit": "us/iter",
            "extra": "iterations: 439503\ncpu: 1.5947527593667907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 7.3378551689654685,
            "unit": "us/iter",
            "extra": "iterations: 100020\ncpu: 7.335913107378466 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.063630166153004,
            "unit": "us/iter",
            "extra": "iterations: 85944\ncpu: 8.06355796797904 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 41.90624332146213,
            "unit": "us/iter",
            "extra": "iterations: 16583\ncpu: 41.89605722728086 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.198380357743563,
            "unit": "us/iter",
            "extra": "iterations: 169451\ncpu: 4.198397678384747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 20.70606814033588,
            "unit": "us/iter",
            "extra": "iterations: 34517\ncpu: 20.701301764348415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 23.9352636295282,
            "unit": "us/iter",
            "extra": "iterations: 29238\ncpu: 23.935031944730095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.5412512469888506,
            "unit": "us/iter",
            "extra": "iterations: 452089\ncpu: 1.5409145854024489 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.925565966468954,
            "unit": "us/iter",
            "extra": "iterations: 174475\ncpu: 3.925590565983732 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7741115396006283,
            "unit": "us/iter",
            "extra": "iterations: 911470\ncpu: 0.7739456054505245 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8078748735234538,
            "unit": "us/iter",
            "extra": "iterations: 871702\ncpu: 0.8078786236580728 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 26.36647323008788,
            "unit": "us/iter",
            "extra": "iterations: 27120\ncpu: 26.360341297935147 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.7297091243409752,
            "unit": "us/iter",
            "extra": "iterations: 425828\ncpu: 1.7294228655701294 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 20.341580082210243,
            "unit": "us/iter",
            "extra": "iterations: 31630\ncpu: 20.340279070502444 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8163371180630593,
            "unit": "us/iter",
            "extra": "iterations: 862413\ncpu: 0.81612767200866 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8334175465038693,
            "unit": "us/iter",
            "extra": "iterations: 827994\ncpu: 0.8333894086189126 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 26.12620189392974,
            "unit": "us/iter",
            "extra": "iterations: 26717\ncpu: 26.119865516337697 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 7.922744322643191,
            "unit": "us/iter",
            "extra": "iterations: 90403\ncpu: 7.922769565169239 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 22.649069136842826,
            "unit": "us/iter",
            "extra": "iterations: 30794\ncpu: 22.645013996233068 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 28.540967728627773,
            "unit": "us/iter",
            "extra": "iterations: 24232\ncpu: 28.538309755694133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 27.384060202337956,
            "unit": "us/iter",
            "extra": "iterations: 26195\ncpu: 27.37982076732174 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.4261292066450455,
            "unit": "us/iter",
            "extra": "iterations: 126526\ncpu: 5.425512218832514 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.21556128503823985,
            "unit": "us/iter",
            "extra": "iterations: 3142537\ncpu: 0.21555921187244326 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.188770976533665,
            "unit": "us/iter",
            "extra": "iterations: 224191\ncpu: 3.188416038110319 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2627566790797495,
            "unit": "us/iter",
            "extra": "iterations: 558797\ncpu: 1.2626834539197858 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3938611552112103,
            "unit": "us/iter",
            "extra": "iterations: 511456\ncpu: 1.393628323844088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.314646298618938,
            "unit": "us/iter",
            "extra": "iterations: 303711\ncpu: 2.3146340633036595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.609273649633937,
            "unit": "us/iter",
            "extra": "iterations: 192096\ncpu: 3.6088706219806705 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.5633621484817617,
            "unit": "us/iter",
            "extra": "iterations: 197535\ncpu: 3.563294565519965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.466629425340935,
            "unit": "us/iter",
            "extra": "iterations: 277747\ncpu: 2.4663483962023327 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.331287493742416,
            "unit": "us/iter",
            "extra": "iterations: 167788\ncpu: 4.330984021503366 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.767995116917075,
            "unit": "us/iter",
            "extra": "iterations: 126969\ncpu: 5.767045176381696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.3529141385184522,
            "unit": "us/iter",
            "extra": "iterations: 530296\ncpu: 1.3528682452819245 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.2204060075104497,
            "unit": "us/iter",
            "extra": "iterations: 313674\ncpu: 2.2198314364595038 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7990459857032978,
            "unit": "us/iter",
            "extra": "iterations: 903172\ncpu: 0.7989902178101168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8152563866559992,
            "unit": "us/iter",
            "extra": "iterations: 893073\ncpu: 0.8150544266818363 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.2595957575685137,
            "unit": "us/iter",
            "extra": "iterations: 211294\ncpu: 3.2595218652683284 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.4203176637214505,
            "unit": "us/iter",
            "extra": "iterations: 477974\ncpu: 1.420058923707171 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.825052307336206,
            "unit": "us/iter",
            "extra": "iterations: 198844\ncpu: 3.82506990907435 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.823667922481313,
            "unit": "us/iter",
            "extra": "iterations: 896098\ncpu: 0.8234952114612377 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8156224026842998,
            "unit": "us/iter",
            "extra": "iterations: 855210\ncpu: 0.8155779621379525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.2146526013065833,
            "unit": "us/iter",
            "extra": "iterations: 318513\ncpu: 2.214635487405536 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.990403135495191,
            "unit": "us/iter",
            "extra": "iterations: 354330\ncpu: 1.9900338977789478 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.283723738913979,
            "unit": "us/iter",
            "extra": "iterations: 132049\ncpu: 5.283745488417211 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.1877232003719023,
            "unit": "us/iter",
            "extra": "iterations: 206626\ncpu: 3.1867880953994803 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.02674635616801,
            "unit": "us/iter",
            "extra": "iterations: 332068\ncpu: 2.026577971981668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.7066751478208366,
            "unit": "us/iter",
            "extra": "iterations: 262818\ncpu: 2.7059541051221894 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.21903234331049612,
            "unit": "us/iter",
            "extra": "iterations: 3159355\ncpu: 0.21902982665765697 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 2.997453669986586,
            "unit": "us/iter",
            "extra": "iterations: 231772\ncpu: 2.9967486797369594 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.1791679290838033,
            "unit": "us/iter",
            "extra": "iterations: 597663\ncpu: 1.1791328139770834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3299319281021496,
            "unit": "us/iter",
            "extra": "iterations: 528691\ncpu: 1.3296660979664887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.228968046015895,
            "unit": "us/iter",
            "extra": "iterations: 309977\ncpu: 2.228791297418786 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.7397744154637813,
            "unit": "us/iter",
            "extra": "iterations: 191006\ncpu: 3.7391557490339133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.6253723762166703,
            "unit": "us/iter",
            "extra": "iterations: 191422\ncpu: 3.6253356092821023 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.5307365743614647,
            "unit": "us/iter",
            "extra": "iterations: 272650\ncpu: 2.53026350265908 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.274693619523681,
            "unit": "us/iter",
            "extra": "iterations: 168232\ncpu: 4.274417096628348 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.456498541369412,
            "unit": "us/iter",
            "extra": "iterations: 132316\ncpu: 5.45546466791603 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.2602519270520396,
            "unit": "us/iter",
            "extra": "iterations: 546690\ncpu: 1.260149995426996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.180756185898424,
            "unit": "us/iter",
            "extra": "iterations: 346231\ncpu: 2.1806143615100835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7335221940644073,
            "unit": "us/iter",
            "extra": "iterations: 961248\ncpu: 0.7334410672375742 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7757633127276126,
            "unit": "us/iter",
            "extra": "iterations: 918989\ncpu: 0.7754729414606847 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.325290146899138,
            "unit": "us/iter",
            "extra": "iterations: 219606\ncpu: 3.324425379998758 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.4365465457181419,
            "unit": "us/iter",
            "extra": "iterations: 481967\ncpu: 1.4365333331950252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.6978380753460196,
            "unit": "us/iter",
            "extra": "iterations: 189582\ncpu: 3.696762203162633 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7420948405711421,
            "unit": "us/iter",
            "extra": "iterations: 983229\ncpu: 0.7420992810423548 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7634415749849919,
            "unit": "us/iter",
            "extra": "iterations: 868224\ncpu: 0.7633194221767375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.157104763404884,
            "unit": "us/iter",
            "extra": "iterations: 323844\ncpu: 2.1570330683909864 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.910252892313401,
            "unit": "us/iter",
            "extra": "iterations: 358018\ncpu: 1.9099925143428733 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.143469896730066,
            "unit": "us/iter",
            "extra": "iterations: 135085\ncpu: 5.1431850464522135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.4335438302653225,
            "unit": "us/iter",
            "extra": "iterations: 204790\ncpu: 3.433564690658679 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.1381995743590303,
            "unit": "us/iter",
            "extra": "iterations: 327036\ncpu: 2.1380854034418113 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.710359782400979,
            "unit": "us/iter",
            "extra": "iterations: 252208\ncpu: 2.7098208502505767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.1991037806993406,
            "unit": "us/iter",
            "extra": "iterations: 3378740\ncpu: 0.19905481658842755 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.1022510761954094,
            "unit": "us/iter",
            "extra": "iterations: 231603\ncpu: 3.102261352400374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.2995929895362752,
            "unit": "us/iter",
            "extra": "iterations: 560020\ncpu: 1.2993214813756548 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.4122516030114167,
            "unit": "us/iter",
            "extra": "iterations: 498281\ncpu: 1.4121573891037582 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.3268045261246106,
            "unit": "us/iter",
            "extra": "iterations: 293231\ncpu: 2.3261593999270223 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.840881278416245,
            "unit": "us/iter",
            "extra": "iterations: 186950\ncpu: 3.8406744798074963 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.692966482559139,
            "unit": "us/iter",
            "extra": "iterations: 190468\ncpu: 3.6914847480941133 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.5578683189803124,
            "unit": "us/iter",
            "extra": "iterations: 264518\ncpu: 2.557846683401473 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.232022675093356,
            "unit": "us/iter",
            "extra": "iterations: 165512\ncpu: 4.231766748030376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.426142607403832,
            "unit": "us/iter",
            "extra": "iterations: 130421\ncpu: 5.425862920848692 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3409596227124758,
            "unit": "us/iter",
            "extra": "iterations: 560315\ncpu: 1.340677352917582 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.2021606868882637,
            "unit": "us/iter",
            "extra": "iterations: 318713\ncpu: 2.2020809442977893 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7894004078929483,
            "unit": "us/iter",
            "extra": "iterations: 898766\ncpu: 0.7892642512066437 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7819948272848437,
            "unit": "us/iter",
            "extra": "iterations: 864923\ncpu: 0.7819219398721132 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.2657643456608314,
            "unit": "us/iter",
            "extra": "iterations: 222576\ncpu: 3.2655937207964874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.5196984092836714,
            "unit": "us/iter",
            "extra": "iterations: 478778\ncpu: 1.5196156673865502 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.8792438346157625,
            "unit": "us/iter",
            "extra": "iterations: 180889\ncpu: 3.8790450552548066 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8458401655200125,
            "unit": "us/iter",
            "extra": "iterations: 798695\ncpu: 0.8458018780636162 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8532527179613307,
            "unit": "us/iter",
            "extra": "iterations: 801336\ncpu: 0.8532561272674504 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.201467217821023,
            "unit": "us/iter",
            "extra": "iterations: 318725\ncpu: 2.200993894423049 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.8650650934426631,
            "unit": "us/iter",
            "extra": "iterations: 366212\ncpu: 1.865050391576476 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.262419602226655,
            "unit": "us/iter",
            "extra": "iterations: 133393\ncpu: 5.261252576971775 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.4885014105068612,
            "unit": "us/iter",
            "extra": "iterations: 219070\ncpu: 3.4882911169946387 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.2112243785690304,
            "unit": "us/iter",
            "extra": "iterations: 336320\ncpu: 2.210820067198053 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.8603662526949223,
            "unit": "us/iter",
            "extra": "iterations: 248648\ncpu: 2.8603023229625575 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.21223354395542135,
            "unit": "us/iter",
            "extra": "iterations: 3248472\ncpu: 0.21221204369315994 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.079592315230168,
            "unit": "us/iter",
            "extra": "iterations: 228608\ncpu: 3.079423624719808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2464448478413,
            "unit": "us/iter",
            "extra": "iterations: 546470\ncpu: 1.2461142606180597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.3392604487604058,
            "unit": "us/iter",
            "extra": "iterations: 553391\ncpu: 1.3391803914411118 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.289723792262021,
            "unit": "us/iter",
            "extra": "iterations: 305654\ncpu: 2.2897032167090914 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.6300318957296493,
            "unit": "us/iter",
            "extra": "iterations: 188740\ncpu: 3.6742444632828617 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.587284173761744,
            "unit": "us/iter",
            "extra": "iterations: 199283\ncpu: 3.5866008038819395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.6222365403173047,
            "unit": "us/iter",
            "extra": "iterations: 266221\ncpu: 2.6221846097790458 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.3687571375723575,
            "unit": "us/iter",
            "extra": "iterations: 162170\ncpu: 4.368104075969777 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.7048437932525315,
            "unit": "us/iter",
            "extra": "iterations: 122101\ncpu: 5.704546883317626 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3822343412879063,
            "unit": "us/iter",
            "extra": "iterations: 517715\ncpu: 1.3822423437605527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.2341693789433146,
            "unit": "us/iter",
            "extra": "iterations: 313144\ncpu: 2.234045662698397 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7525092087045907,
            "unit": "us/iter",
            "extra": "iterations: 944161\ncpu: 0.7524307866984927 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8101518926283381,
            "unit": "us/iter",
            "extra": "iterations: 823088\ncpu: 0.8098626477363016 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.354118018323326,
            "unit": "us/iter",
            "extra": "iterations: 208349\ncpu: 3.353977921660082 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4735585583201105,
            "unit": "us/iter",
            "extra": "iterations: 491843\ncpu: 1.4734114321033205 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.899250226325519,
            "unit": "us/iter",
            "extra": "iterations: 182259\ncpu: 3.8989822121265383 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8225487858280865,
            "unit": "us/iter",
            "extra": "iterations: 828919\ncpu: 0.8222608554032728 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8236237851776995,
            "unit": "us/iter",
            "extra": "iterations: 828928\ncpu: 0.8235276948058176 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.2216807713979043,
            "unit": "us/iter",
            "extra": "iterations: 321287\ncpu: 2.2213881482911337 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.9514597514692165,
            "unit": "us/iter",
            "extra": "iterations: 344584\ncpu: 1.9513158504167212 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.156223635569883,
            "unit": "us/iter",
            "extra": "iterations: 132546\ncpu: 5.15616166462942 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.2102510236957023,
            "unit": "us/iter",
            "extra": "iterations: 224676\ncpu: 3.209302106143944 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.231942853652599,
            "unit": "us/iter",
            "extra": "iterations: 319303\ncpu: 2.2317692787102352 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.8405833755263066,
            "unit": "us/iter",
            "extra": "iterations: 244904\ncpu: 2.8396776982002367 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 12.35696077021233,
            "unit": "ns/iter",
            "extra": "iterations: 57363494\ncpu: 12.35688303784288 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 46.51663436264186,
            "unit": "ns/iter",
            "extra": "iterations: 14851606\ncpu: 46.506395671957875 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 53.20747453940159,
            "unit": "ns/iter",
            "extra": "iterations: 12907685\ncpu: 53.207653192652366 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 65.84857033406959,
            "unit": "ns/iter",
            "extra": "iterations: 10598630\ncpu: 65.83471382622422 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 75.90406918611615,
            "unit": "ns/iter",
            "extra": "iterations: 8926183\ncpu: 76.17420772126748 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 85.30342872179517,
            "unit": "ns/iter",
            "extra": "iterations: 8121423\ncpu: 85.30374997091344 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 102.28298827513221,
            "unit": "ns/iter",
            "extra": "iterations: 6971674\ncpu: 102.25574058683874 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 119.2142400471526,
            "unit": "ns/iter",
            "extra": "iterations: 5866989\ncpu: 119.21378887876386 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 131.93420309243731,
            "unit": "ns/iter",
            "extra": "iterations: 5058642\ncpu: 131.89544862039938 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 154.03525260373067,
            "unit": "ns/iter",
            "extra": "iterations: 4706858\ncpu: 154.0320415444862 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 60.59826732119649,
            "unit": "ns/iter",
            "extra": "iterations: 11597187\ncpu: 60.597039609687755 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 70.31418412725381,
            "unit": "ns/iter",
            "extra": "iterations: 9927026\ncpu: 70.30030897471323 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 80.77793365003568,
            "unit": "ns/iter",
            "extra": "iterations: 9192712\ncpu: 80.7782640204544 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 90.30183095914714,
            "unit": "ns/iter",
            "extra": "iterations: 7455819\ncpu: 90.28685661494787 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 98.08946884616233,
            "unit": "ns/iter",
            "extra": "iterations: 7469248\ncpu: 98.08900655059244 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 114.07382184595032,
            "unit": "ns/iter",
            "extra": "iterations: 6475766\ncpu: 114.06550962464846 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 125.70292198126747,
            "unit": "ns/iter",
            "extra": "iterations: 5677586\ncpu: 125.69336510271039 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 142.26451501634187,
            "unit": "ns/iter",
            "extra": "iterations: 4853112\ncpu: 142.2650322102582 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 161.59810907684187,
            "unit": "ns/iter",
            "extra": "iterations: 4550899\ncpu: 161.56550079445825 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 103.0885761197246,
            "unit": "ns/iter",
            "extra": "iterations: 6865767\ncpu: 103.08178896836893 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 185.211197052748,
            "unit": "ns/iter",
            "extra": "iterations: 3816540\ncpu: 185.17172203094518 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 350.3051223966276,
            "unit": "ns/iter",
            "extra": "iterations: 1980284\ncpu: 350.28497528637536 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 733.2456354497626,
            "unit": "ns/iter",
            "extra": "iterations: 996208\ncpu: 732.7856772882525 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1651.20080626641,
            "unit": "ns/iter",
            "extra": "iterations: 440549\ncpu: 1650.7021420999583 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3650.4923844713007,
            "unit": "ns/iter",
            "extra": "iterations: 185345\ncpu: 3649.3561466455294 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 9573.159523291017,
            "unit": "ns/iter",
            "extra": "iterations: 73168\ncpu: 9572.448775420808 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 25248.329052329434,
            "unit": "ns/iter",
            "extra": "iterations: 27953\ncpu: 25240.1078238479 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 56696.259499994994,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 56688.66109999726 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}