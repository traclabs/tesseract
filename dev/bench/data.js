window.BENCHMARK_DATA = {
  "lastUpdate": 1591909022320,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "powelson.matthew@gmail.com",
            "name": "Matthew Powelson",
            "username": "mpowelson"
          },
          "committer": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "distinct": true,
          "id": "29fdb24222c591344d49cddd0b46a68e271b802a",
          "message": "Switch octomap to use CMake targets",
          "timestamp": "2020-06-11T14:58:03-05:00",
          "tree_id": "f99711edbfd0fb8eb8fc31a825d28480e786f9f5",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/29fdb24222c591344d49cddd0b46a68e271b802a"
        },
        "date": 1591909017637,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 77.25527576702326,
            "unit": "us/iter",
            "extra": "iterations: 8344\ncpu: 77.2449573346117 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 75.64078515293384,
            "unit": "us/iter",
            "extra": "iterations: 8271\ncpu: 75.63069387014872 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 78.53827171780091,
            "unit": "us/iter",
            "extra": "iterations: 9186\ncpu: 78.52213030698888 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 81.14720659822335,
            "unit": "us/iter",
            "extra": "iterations: 8669\ncpu: 81.13390863998153 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 90.69376775066493,
            "unit": "us/iter",
            "extra": "iterations: 7380\ncpu: 90.68825542005416 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 107.1855887271257,
            "unit": "us/iter",
            "extra": "iterations: 6458\ncpu: 107.15858934654702 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 161.31627168615407,
            "unit": "us/iter",
            "extra": "iterations: 4715\ncpu: 161.29876882290557 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 278.90803504660823,
            "unit": "us/iter",
            "extra": "iterations: 2568\ncpu: 278.85967834890954 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 574.401888983914,
            "unit": "us/iter",
            "extra": "iterations: 1171\ncpu: 574.3122322801029 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1606.114724669241,
            "unit": "us/iter",
            "extra": "iterations: 454\ncpu: 1605.9697753303972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.807991688229939,
            "unit": "us/iter",
            "extra": "iterations: 145697\ncpu: 4.807453653815793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.701660622226094,
            "unit": "us/iter",
            "extra": "iterations: 94467\ncpu: 7.700457641292734 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 42.655527648927105,
            "unit": "us/iter",
            "extra": "iterations: 16384\ncpu: 42.65261663818356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 24.009609823453392,
            "unit": "us/iter",
            "extra": "iterations: 28605\ncpu: 24.004311693759817 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 5.42216525511437,
            "unit": "us/iter",
            "extra": "iterations: 130471\ncpu: 5.421495060204954 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 7.571640287535649,
            "unit": "us/iter",
            "extra": "iterations: 90842\ncpu: 7.571160058122883 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 5.3482478561462115,
            "unit": "us/iter",
            "extra": "iterations: 139585\ncpu: 5.3475875774617645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 74.6509776086224,
            "unit": "us/iter",
            "extra": "iterations: 9066\ncpu: 74.64675865872478 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 70.3843079764227,
            "unit": "us/iter",
            "extra": "iterations: 10017\ncpu: 70.37018937805743 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 6.022035806587089,
            "unit": "us/iter",
            "extra": "iterations: 119950\ncpu: 6.0216489620675135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 42.650747599535045,
            "unit": "us/iter",
            "extra": "iterations: 17080\ncpu: 42.64282341920383 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 72.7288881027299,
            "unit": "us/iter",
            "extra": "iterations: 9187\ncpu: 72.72419179275067 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.6147916538103795,
            "unit": "us/iter",
            "extra": "iterations: 1234815\ncpu: 0.6147945643679398 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.6616281204096939,
            "unit": "us/iter",
            "extra": "iterations: 1064764\ncpu: 0.6615207858267194 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 13.676585691975141,
            "unit": "us/iter",
            "extra": "iterations: 49287\ncpu: 13.675585489074164 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 27.452789863366544,
            "unit": "us/iter",
            "extra": "iterations: 26202\ncpu: 27.449517708571808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 73.91003853624667,
            "unit": "us/iter",
            "extra": "iterations: 9783\ncpu: 73.90532484922844 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6432562385742415,
            "unit": "us/iter",
            "extra": "iterations: 1066670\ncpu: 0.6432122005868737 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6349517049979241,
            "unit": "us/iter",
            "extra": "iterations: 1124195\ncpu: 0.6348888822668695 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 78.29032517140223,
            "unit": "us/iter",
            "extra": "iterations: 9189\ncpu: 78.28483153770797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.998890206942458,
            "unit": "us/iter",
            "extra": "iterations: 111865\ncpu: 5.998054297590838 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.954061477217019,
            "unit": "us/iter",
            "extra": "iterations: 122338\ncpu: 5.953394374601519 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 14.361028484336622,
            "unit": "us/iter",
            "extra": "iterations: 50519\ncpu: 14.359392644351642 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 75.03311255269698,
            "unit": "us/iter",
            "extra": "iterations: 9249\ncpu: 75.02865304357253 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.589038358570418,
            "unit": "us/iter",
            "extra": "iterations: 150162\ncpu: 4.589000026637891 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.468240132302086,
            "unit": "us/iter",
            "extra": "iterations: 149959\ncpu: 4.46792553297899 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.369060740497637,
            "unit": "us/iter",
            "extra": "iterations: 98501\ncpu: 7.368057704997947 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 39.39556451418287,
            "unit": "us/iter",
            "extra": "iterations: 16570\ncpu: 39.395205310802716 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 23.682087124974114,
            "unit": "us/iter",
            "extra": "iterations: 32264\ncpu: 23.67980241135627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 5.421350837797231,
            "unit": "us/iter",
            "extra": "iterations: 133147\ncpu: 5.42058375329521 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.37449042058525,
            "unit": "us/iter",
            "extra": "iterations: 88471\ncpu: 7.374392704954182 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 5.065264729353677,
            "unit": "us/iter",
            "extra": "iterations: 132830\ncpu: 5.0642007754272225 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 75.27995378797661,
            "unit": "us/iter",
            "extra": "iterations: 9781\ncpu: 75.27079705551587 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 71.79976666665402,
            "unit": "us/iter",
            "extra": "iterations: 9750\ncpu: 71.79033456410275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.812351362062531,
            "unit": "us/iter",
            "extra": "iterations: 126132\ncpu: 5.811115109567781 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 42.778145475160755,
            "unit": "us/iter",
            "extra": "iterations: 15879\ncpu: 42.77563574532395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 72.93033019343821,
            "unit": "us/iter",
            "extra": "iterations: 9873\ncpu: 72.92222181707747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5447648145327223,
            "unit": "us/iter",
            "extra": "iterations: 1260384\ncpu: 0.5447532450427789 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5856209217431814,
            "unit": "us/iter",
            "extra": "iterations: 1214612\ncpu: 0.5855031960823746 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 13.576932213345506,
            "unit": "us/iter",
            "extra": "iterations: 52798\ncpu: 13.576684685026043 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 26.079601175263427,
            "unit": "us/iter",
            "extra": "iterations: 27398\ncpu: 26.04204270384703 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 72.43312856709457,
            "unit": "us/iter",
            "extra": "iterations: 9847\ncpu: 72.42907179851781 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5956486936017219,
            "unit": "us/iter",
            "extra": "iterations: 1160366\ncpu: 0.5955988903501181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5793200177350315,
            "unit": "us/iter",
            "extra": "iterations: 1184100\ncpu: 0.5791743112912795 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 73.85299607927195,
            "unit": "us/iter",
            "extra": "iterations: 9437\ncpu: 73.84741125357624 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.668505526064233,
            "unit": "us/iter",
            "extra": "iterations: 123958\ncpu: 5.667921546007535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.960270640829133,
            "unit": "us/iter",
            "extra": "iterations: 123699\ncpu: 5.959783611831954 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 13.724917825211943,
            "unit": "us/iter",
            "extra": "iterations: 50782\ncpu: 13.724099070536887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 76.10206246076059,
            "unit": "us/iter",
            "extra": "iterations: 9558\ncpu: 76.08468194182882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.48060714502074,
            "unit": "us/iter",
            "extra": "iterations: 148691\ncpu: 4.4806219946062615 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.708504644067961,
            "unit": "us/iter",
            "extra": "iterations: 145885\ncpu: 4.707685498851859 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.4030869856660155,
            "unit": "us/iter",
            "extra": "iterations: 96970\ncpu: 7.402671516963979 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 43.05115795274557,
            "unit": "us/iter",
            "extra": "iterations: 16334\ncpu: 43.046064344312576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 25.10520741379237,
            "unit": "us/iter",
            "extra": "iterations: 27867\ncpu: 25.105271611583778 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 5.385680793124359,
            "unit": "us/iter",
            "extra": "iterations: 131833\ncpu: 5.384418036455204 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 7.266222635585347,
            "unit": "us/iter",
            "extra": "iterations: 86015\ncpu: 7.265531279428027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 5.291506177716706,
            "unit": "us/iter",
            "extra": "iterations: 136701\ncpu: 5.290895860308275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 74.1820533240417,
            "unit": "us/iter",
            "extra": "iterations: 10033\ncpu: 74.17475411143246 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 72.74319421987248,
            "unit": "us/iter",
            "extra": "iterations: 9896\ncpu: 72.58472948666181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.982083102992426,
            "unit": "us/iter",
            "extra": "iterations: 110706\ncpu: 5.980464274745732 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 43.907090476461306,
            "unit": "us/iter",
            "extra": "iterations: 16391\ncpu: 43.90605344396343 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 69.86165343243341,
            "unit": "us/iter",
            "extra": "iterations: 10226\ncpu: 69.84128466653631 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5833436058882813,
            "unit": "us/iter",
            "extra": "iterations: 1160341\ncpu: 0.5833335105800832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.6226193328951397,
            "unit": "us/iter",
            "extra": "iterations: 1191327\ncpu: 0.6225762699913694 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 13.665693371979904,
            "unit": "us/iter",
            "extra": "iterations: 48642\ncpu: 13.664036963940726 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 27.184933597856745,
            "unit": "us/iter",
            "extra": "iterations: 25707\ncpu: 27.184698836892885 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 70.15595235628412,
            "unit": "us/iter",
            "extra": "iterations: 9655\ncpu: 70.13265655100952 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6278508016652189,
            "unit": "us/iter",
            "extra": "iterations: 1144805\ncpu: 0.6277701145609967 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.6190603871406345,
            "unit": "us/iter",
            "extra": "iterations: 1140723\ncpu: 0.6189633188775792 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 77.10504130919635,
            "unit": "us/iter",
            "extra": "iterations: 9441\ncpu: 77.0982323906375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 6.106279926055437,
            "unit": "us/iter",
            "extra": "iterations: 123872\ncpu: 6.106236340738789 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 6.005586651628671,
            "unit": "us/iter",
            "extra": "iterations: 122352\ncpu: 6.004310391329886 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 14.212374014973602,
            "unit": "us/iter",
            "extra": "iterations: 45811\ncpu: 14.211959267424932 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 72.80895776153632,
            "unit": "us/iter",
            "extra": "iterations: 10275\ncpu: 72.7915906569332 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.749176185338996,
            "unit": "us/iter",
            "extra": "iterations: 147447\ncpu: 4.749033205151696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.675580988682265,
            "unit": "us/iter",
            "extra": "iterations: 146397\ncpu: 4.674402248679915 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.454501625494196,
            "unit": "us/iter",
            "extra": "iterations: 90434\ncpu: 7.4543447154832405 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 41.77076960538577,
            "unit": "us/iter",
            "extra": "iterations: 16016\ncpu: 41.76156730769224 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 24.340950568525553,
            "unit": "us/iter",
            "extra": "iterations: 29374\ncpu: 24.33876159188383 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 5.4405523224353205,
            "unit": "us/iter",
            "extra": "iterations: 134923\ncpu: 5.439684205065071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 7.456004120957447,
            "unit": "us/iter",
            "extra": "iterations: 89785\ncpu: 7.455868419000888 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 5.030744253186407,
            "unit": "us/iter",
            "extra": "iterations: 128854\ncpu: 5.030769607462653 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 73.0947491652676,
            "unit": "us/iter",
            "extra": "iterations: 9584\ncpu: 73.07272798414044 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 73.99334924422524,
            "unit": "us/iter",
            "extra": "iterations: 10056\ncpu: 73.99103768894109 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.807040672134822,
            "unit": "us/iter",
            "extra": "iterations: 124975\ncpu: 5.805971138227644 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 46.098777777780526,
            "unit": "us/iter",
            "extra": "iterations: 16029\ncpu: 46.09770996319122 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 70.50013873387782,
            "unit": "us/iter",
            "extra": "iterations: 10394\ncpu: 70.49016663459663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5842161654707827,
            "unit": "us/iter",
            "extra": "iterations: 1212733\ncpu: 0.5841619878406891 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6449928068854632,
            "unit": "us/iter",
            "extra": "iterations: 1063378\ncpu: 0.6449859325658359 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 13.432522947656189,
            "unit": "us/iter",
            "extra": "iterations: 50223\ncpu: 13.43024259801267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 28.279771671243765,
            "unit": "us/iter",
            "extra": "iterations: 26256\ncpu: 28.277086875380856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 72.21974670508834,
            "unit": "us/iter",
            "extra": "iterations: 9029\ncpu: 72.20826503488834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6518843820857243,
            "unit": "us/iter",
            "extra": "iterations: 1083621\ncpu: 0.6518786393028569 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.6418253978136029,
            "unit": "us/iter",
            "extra": "iterations: 1124774\ncpu: 0.641812638805658 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 78.58461263888302,
            "unit": "us/iter",
            "extra": "iterations: 9273\ncpu: 78.56243761457996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.907803813601147,
            "unit": "us/iter",
            "extra": "iterations: 115324\ncpu: 5.9077494797267605 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.915087456043732,
            "unit": "us/iter",
            "extra": "iterations: 124554\ncpu: 5.913191980988184 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 14.715821201754455,
            "unit": "us/iter",
            "extra": "iterations: 49128\ncpu: 14.71467037127525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 74.46760558353893,
            "unit": "us/iter",
            "extra": "iterations: 9528\ncpu: 74.4669402812769 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.736064279208026,
            "unit": "us/iter",
            "extra": "iterations: 150453\ncpu: 4.735645982466277 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 5.1879815782966965,
            "unit": "us/iter",
            "extra": "iterations: 129304\ncpu: 5.188005227989925 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 8.777079744946645,
            "unit": "us/iter",
            "extra": "iterations: 74337\ncpu: 8.775411006631852 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.641941690075825,
            "unit": "us/iter",
            "extra": "iterations: 411508\ncpu: 1.6418957638733873 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.6955281320990134,
            "unit": "us/iter",
            "extra": "iterations: 406724\ncpu: 1.685076764587304 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 8.376739398305217,
            "unit": "us/iter",
            "extra": "iterations: 86024\ncpu: 8.376629370873268 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 9.129457379962867,
            "unit": "us/iter",
            "extra": "iterations: 74953\ncpu: 9.129373807586209 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 45.41075679181001,
            "unit": "us/iter",
            "extra": "iterations: 14650\ncpu: 45.407692354949084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.757357710352058,
            "unit": "us/iter",
            "extra": "iterations: 159850\ncpu: 4.756246393493898 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 21.672932285530827,
            "unit": "us/iter",
            "extra": "iterations: 30540\ncpu: 21.672504158480667 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 24.522037694869113,
            "unit": "us/iter",
            "extra": "iterations: 28996\ncpu: 24.520445578700436 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.6819226249865624,
            "unit": "us/iter",
            "extra": "iterations: 478113\ncpu: 1.6741944101080646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 4.215422178448975,
            "unit": "us/iter",
            "extra": "iterations: 158388\ncpu: 4.214824948859775 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7955554113425297,
            "unit": "us/iter",
            "extra": "iterations: 849050\ncpu: 0.7954934515046286 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8586716098670227,
            "unit": "us/iter",
            "extra": "iterations: 777499\ncpu: 0.8586663777059582 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 27.085802652585304,
            "unit": "us/iter",
            "extra": "iterations: 26314\ncpu: 27.083572622938476 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.855812566437672,
            "unit": "us/iter",
            "extra": "iterations: 367821\ncpu: 1.8557879811103941 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 22.16900175544404,
            "unit": "us/iter",
            "extra": "iterations: 31331\ncpu: 22.167699658485027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8493949150508574,
            "unit": "us/iter",
            "extra": "iterations: 817196\ncpu: 0.8493828542968817 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8708691787387497,
            "unit": "us/iter",
            "extra": "iterations: 822588\ncpu: 0.8707419570915313 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 28.27972653979929,
            "unit": "us/iter",
            "extra": "iterations: 24435\ncpu: 28.278988704727105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 9.112924388549795,
            "unit": "us/iter",
            "extra": "iterations: 77766\ncpu: 9.111861044672471 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 24.10273148434388,
            "unit": "us/iter",
            "extra": "iterations: 29097\ncpu: 24.100709282744006 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 31.16699210295734,
            "unit": "us/iter",
            "extra": "iterations: 22920\ncpu: 31.162785951133838 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 28.546392438399668,
            "unit": "us/iter",
            "extra": "iterations: 23540\ncpu: 28.545734749362367 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 6.2913336420740436,
            "unit": "us/iter",
            "extra": "iterations: 104726\ncpu: 6.291093806695526 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 5.239145519999511,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.238175389999924 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 8.752689975751723,
            "unit": "us/iter",
            "extra": "iterations: 82071\ncpu: 8.752614809128712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.546084529264569,
            "unit": "us/iter",
            "extra": "iterations: 470902\ncpu: 1.5437335963746044 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.7411191857282353,
            "unit": "us/iter",
            "extra": "iterations: 401340\ncpu: 1.7410904519858406 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 8.166138696888385,
            "unit": "us/iter",
            "extra": "iterations: 82756\ncpu: 8.165532807288788 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 9.212023580391184,
            "unit": "us/iter",
            "extra": "iterations: 77310\ncpu: 9.209908925106552 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 45.601786289014356,
            "unit": "us/iter",
            "extra": "iterations: 15535\ncpu: 45.5983582233664 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.578119316571018,
            "unit": "us/iter",
            "extra": "iterations: 137659\ncpu: 4.5791536695748665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 21.984005768357967,
            "unit": "us/iter",
            "extra": "iterations: 32765\ncpu: 21.983258690676237 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.751784382279574,
            "unit": "us/iter",
            "extra": "iterations: 28314\ncpu: 23.744603800240128 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.6392528581682468,
            "unit": "us/iter",
            "extra": "iterations: 436031\ncpu: 1.6389908974362017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 4.308806797398224,
            "unit": "us/iter",
            "extra": "iterations: 168388\ncpu: 4.304532579518671 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.8280819799046013,
            "unit": "us/iter",
            "extra": "iterations: 829252\ncpu: 0.8280640516995897 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7873518819968625,
            "unit": "us/iter",
            "extra": "iterations: 799231\ncpu: 0.7872845610343115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 27.721810558542227,
            "unit": "us/iter",
            "extra": "iterations: 26784\ncpu: 27.72009147252121 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.8591416284694395,
            "unit": "us/iter",
            "extra": "iterations: 386363\ncpu: 1.8590098146043739 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 23.4798712363459,
            "unit": "us/iter",
            "extra": "iterations: 30024\ncpu: 23.4763961830532 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.8653769328115374,
            "unit": "us/iter",
            "extra": "iterations: 847082\ncpu: 0.8653725330015257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.8562647786526435,
            "unit": "us/iter",
            "extra": "iterations: 826936\ncpu: 0.8597840098870828 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 28.972205352622318,
            "unit": "us/iter",
            "extra": "iterations: 23764\ncpu: 28.972325492341017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 9.076507714216849,
            "unit": "us/iter",
            "extra": "iterations: 72334\ncpu: 9.07436367406745 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 23.883873271761402,
            "unit": "us/iter",
            "extra": "iterations: 33126\ncpu: 23.88144994868027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 29.547436041245824,
            "unit": "us/iter",
            "extra": "iterations: 23179\ncpu: 29.534062297769676 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 30.07242898512636,
            "unit": "us/iter",
            "extra": "iterations: 23136\ncpu: 30.07187988416311 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 6.08173123213655,
            "unit": "us/iter",
            "extra": "iterations: 120725\ncpu: 6.081148270863718 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 5.409072293289486,
            "unit": "us/iter",
            "extra": "iterations: 134065\ncpu: 5.4083790176407645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 8.85297088689076,
            "unit": "us/iter",
            "extra": "iterations: 80754\ncpu: 8.852891126136097 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.601387599786081,
            "unit": "us/iter",
            "extra": "iterations: 451218\ncpu: 1.600986150818467 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.7514477125325623,
            "unit": "us/iter",
            "extra": "iterations: 402716\ncpu: 1.7514542357393152 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 8.414708565439541,
            "unit": "us/iter",
            "extra": "iterations: 81140\ncpu: 8.413451651466447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 9.306495981058113,
            "unit": "us/iter",
            "extra": "iterations: 76015\ncpu: 9.306231046504038 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 45.04206949936135,
            "unit": "us/iter",
            "extra": "iterations: 14921\ncpu: 45.03831144025099 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.784398851978105,
            "unit": "us/iter",
            "extra": "iterations: 152262\ncpu: 4.7842465224416495 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 22.13071151093145,
            "unit": "us/iter",
            "extra": "iterations: 32126\ncpu: 22.126855475315466 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 25.81870535006694,
            "unit": "us/iter",
            "extra": "iterations: 27738\ncpu: 25.81859322950435 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.6992671418620604,
            "unit": "us/iter",
            "extra": "iterations: 424808\ncpu: 1.698801795163966 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 4.3052101465979415,
            "unit": "us/iter",
            "extra": "iterations: 160507\ncpu: 4.305228438634969 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.8185955495133366,
            "unit": "us/iter",
            "extra": "iterations: 862108\ncpu: 0.8183775223058041 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.849820106004829,
            "unit": "us/iter",
            "extra": "iterations: 746195\ncpu: 0.8498171778154365 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 27.72589675966796,
            "unit": "us/iter",
            "extra": "iterations: 26201\ncpu: 27.72064528071481 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.8903597113824493,
            "unit": "us/iter",
            "extra": "iterations: 365190\ncpu: 1.890318020756357 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 23.08015892524448,
            "unit": "us/iter",
            "extra": "iterations: 30593\ncpu: 23.07979845062647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.884427841329857,
            "unit": "us/iter",
            "extra": "iterations: 791478\ncpu: 0.8843493034550537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8959894720712539,
            "unit": "us/iter",
            "extra": "iterations: 815830\ncpu: 0.8959153929127298 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 29.29605051775319,
            "unit": "us/iter",
            "extra": "iterations: 24625\ncpu: 29.292889786802338 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 9.434492177698955,
            "unit": "us/iter",
            "extra": "iterations: 72549\ncpu: 9.434528180953537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 24.5957256204266,
            "unit": "us/iter",
            "extra": "iterations: 28610\ncpu: 24.593868157987508 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 29.876246512891655,
            "unit": "us/iter",
            "extra": "iterations: 21938\ncpu: 29.87517658856679 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 30.108451466156232,
            "unit": "us/iter",
            "extra": "iterations: 24179\ncpu: 30.10708474295969 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 6.468809026210913,
            "unit": "us/iter",
            "extra": "iterations: 108617\ncpu: 6.4687674765458985 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 5.2860831370307535,
            "unit": "us/iter",
            "extra": "iterations: 132023\ncpu: 5.285986775031654 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 8.889426936542995,
            "unit": "us/iter",
            "extra": "iterations: 78555\ncpu: 8.88873885812484 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.5880008129431589,
            "unit": "us/iter",
            "extra": "iterations: 442835\ncpu: 1.5879106935992084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.762762120767607,
            "unit": "us/iter",
            "extra": "iterations: 378957\ncpu: 1.7624093498734834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 8.195677113997979,
            "unit": "us/iter",
            "extra": "iterations: 84934\ncpu: 8.195461935149646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 9.624175983994718,
            "unit": "us/iter",
            "extra": "iterations: 74467\ncpu: 9.623249936213348 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 44.69613099728547,
            "unit": "us/iter",
            "extra": "iterations: 15382\ncpu: 44.6948223247948 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.6602865129574305,
            "unit": "us/iter",
            "extra": "iterations: 149892\ncpu: 4.659545592826838 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 22.099303369387055,
            "unit": "us/iter",
            "extra": "iterations: 32172\ncpu: 22.099355246798616 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 25.195048005680064,
            "unit": "us/iter",
            "extra": "iterations: 28205\ncpu: 25.187915653253594 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.6823357053651737,
            "unit": "us/iter",
            "extra": "iterations: 405138\ncpu: 1.6823184495160073 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 4.446911451982857,
            "unit": "us/iter",
            "extra": "iterations: 163177\ncpu: 4.446165580933558 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.8328626844336302,
            "unit": "us/iter",
            "extra": "iterations: 838106\ncpu: 0.8328660288793899 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.9095597810997778,
            "unit": "us/iter",
            "extra": "iterations: 795795\ncpu: 0.9094917371936136 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 27.263073232428745,
            "unit": "us/iter",
            "extra": "iterations: 24907\ncpu: 27.258205524550952 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.9165490905305251,
            "unit": "us/iter",
            "extra": "iterations: 364388\ncpu: 1.9162602006651772 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 22.311655184207293,
            "unit": "us/iter",
            "extra": "iterations: 32194\ncpu: 22.311300397589616 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.9263599502800678,
            "unit": "us/iter",
            "extra": "iterations: 809334\ncpu: 0.9240908796615214 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8838078792818671,
            "unit": "us/iter",
            "extra": "iterations: 798753\ncpu: 0.8837301656457026 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 28.961183438426502,
            "unit": "us/iter",
            "extra": "iterations: 23790\ncpu: 28.95785641025604 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 9.169432288585934,
            "unit": "us/iter",
            "extra": "iterations: 79477\ncpu: 9.167475294739091 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 23.954002365281454,
            "unit": "us/iter",
            "extra": "iterations: 27058\ncpu: 23.95408533520598 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 30.671533887770316,
            "unit": "us/iter",
            "extra": "iterations: 25732\ncpu: 30.666748406652907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 31.04480119671279,
            "unit": "us/iter",
            "extra": "iterations: 23063\ncpu: 31.044131856219238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 6.276371909742406,
            "unit": "us/iter",
            "extra": "iterations: 110266\ncpu: 6.274520532167822 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2303748228823905,
            "unit": "us/iter",
            "extra": "iterations: 3141980\ncpu: 0.23035230141502422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.3096031735171088,
            "unit": "us/iter",
            "extra": "iterations: 204442\ncpu: 3.3088830034924683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.36122267316414,
            "unit": "us/iter",
            "extra": "iterations: 544785\ncpu: 1.3611899373147303 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.4147291979853653,
            "unit": "us/iter",
            "extra": "iterations: 470303\ncpu: 1.4146313865742097 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.440108824315074,
            "unit": "us/iter",
            "extra": "iterations: 288079\ncpu: 2.440067176017736 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 4.005865717465275,
            "unit": "us/iter",
            "extra": "iterations: 172636\ncpu: 4.00496739382275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.9365248854661408,
            "unit": "us/iter",
            "extra": "iterations: 173093\ncpu: 3.936481706365887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.858837235309736,
            "unit": "us/iter",
            "extra": "iterations: 251283\ncpu: 2.85822543108769 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.602114908300802,
            "unit": "us/iter",
            "extra": "iterations: 150111\ncpu: 4.601841990260481 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 6.0958721247249015,
            "unit": "us/iter",
            "extra": "iterations: 115902\ncpu: 6.094526047868018 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.421842437626281,
            "unit": "us/iter",
            "extra": "iterations: 506739\ncpu: 1.4217773666522582 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.3957042580344554,
            "unit": "us/iter",
            "extra": "iterations: 306409\ncpu: 2.3954117405167707 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7974074124031095,
            "unit": "us/iter",
            "extra": "iterations: 808105\ncpu: 0.7974007412403249 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8691078214397908,
            "unit": "us/iter",
            "extra": "iterations: 828249\ncpu: 0.8690922114002178 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.538319060025265,
            "unit": "us/iter",
            "extra": "iterations: 196941\ncpu: 3.5382864208062488 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.5983336079383248,
            "unit": "us/iter",
            "extra": "iterations: 436992\ncpu: 1.5983103969867107 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 4.351115705474542,
            "unit": "us/iter",
            "extra": "iterations: 165541\ncpu: 4.350681190762407 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8535583547519009,
            "unit": "us/iter",
            "extra": "iterations: 816266\ncpu: 0.8535471292446148 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8784964107422762,
            "unit": "us/iter",
            "extra": "iterations: 816882\ncpu: 0.8784573083994744 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.263796923912148,
            "unit": "us/iter",
            "extra": "iterations: 301877\ncpu: 2.2637815037250277 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 2.125189912964911,
            "unit": "us/iter",
            "extra": "iterations: 339287\ncpu: 2.125030690831017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.748887031113011,
            "unit": "us/iter",
            "extra": "iterations: 123804\ncpu: 5.748804440890583 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.698089607979084,
            "unit": "us/iter",
            "extra": "iterations: 183689\ncpu: 3.6977662353215868 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.3460289010615645,
            "unit": "us/iter",
            "extra": "iterations: 309608\ncpu: 2.345917305108434 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.996585817022037,
            "unit": "us/iter",
            "extra": "iterations: 232081\ncpu: 2.996244492224608 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.2321722258195061,
            "unit": "us/iter",
            "extra": "iterations: 3111955\ncpu: 0.23217029520028842 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.3027855220456286,
            "unit": "us/iter",
            "extra": "iterations: 213276\ncpu: 3.3022400363847155 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.3013817527166607,
            "unit": "us/iter",
            "extra": "iterations: 555184\ncpu: 1.3013482629182356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.4072120285110599,
            "unit": "us/iter",
            "extra": "iterations: 520081\ncpu: 1.4070007594970857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.3886685640944325,
            "unit": "us/iter",
            "extra": "iterations: 277393\ncpu: 2.3886246120125723 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 4.1530911508228305,
            "unit": "us/iter",
            "extra": "iterations: 168106\ncpu: 4.152738688684601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.8675595570898214,
            "unit": "us/iter",
            "extra": "iterations: 183152\ncpu: 3.8675186784746898 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.814940131798788,
            "unit": "us/iter",
            "extra": "iterations: 250684\ncpu: 2.814614363102468 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.672679713321912,
            "unit": "us/iter",
            "extra": "iterations: 147343\ncpu: 4.6726950041740025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 6.1850899737021106,
            "unit": "us/iter",
            "extra": "iterations: 117112\ncpu: 6.184307944531693 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.3991034623803256,
            "unit": "us/iter",
            "extra": "iterations: 503613\ncpu: 1.3966654732899915 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.380205624170729,
            "unit": "us/iter",
            "extra": "iterations: 306783\ncpu: 2.379863238836513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.829824415472152,
            "unit": "us/iter",
            "extra": "iterations: 851157\ncpu: 0.8297642620574119 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8233793257763832,
            "unit": "us/iter",
            "extra": "iterations: 851350\ncpu: 0.8233703811593265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.687931174635137,
            "unit": "us/iter",
            "extra": "iterations: 207656\ncpu: 3.687859618792627 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.49761509462071,
            "unit": "us/iter",
            "extra": "iterations: 442449\ncpu: 1.4975650233133941 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 4.121049245005827,
            "unit": "us/iter",
            "extra": "iterations: 165763\ncpu: 4.120976834396044 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.8573632186966019,
            "unit": "us/iter",
            "extra": "iterations: 849524\ncpu: 0.8573476452695915 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.838486492051846,
            "unit": "us/iter",
            "extra": "iterations: 811078\ncpu: 0.8384234204355054 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.3195356116871384,
            "unit": "us/iter",
            "extra": "iterations: 302148\ncpu: 2.3195179481578974 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 2.091222902263519,
            "unit": "us/iter",
            "extra": "iterations: 333967\ncpu: 2.091065063314672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.695469556382547,
            "unit": "us/iter",
            "extra": "iterations: 126956\ncpu: 5.695429566148836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.6990697135272286,
            "unit": "us/iter",
            "extra": "iterations: 195830\ncpu: 3.698782449062987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.3556515363171076,
            "unit": "us/iter",
            "extra": "iterations: 302086\ncpu: 2.355603063366025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.995440779681062,
            "unit": "us/iter",
            "extra": "iterations: 234455\ncpu: 2.9949038280266973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.22044449941328798,
            "unit": "us/iter",
            "extra": "iterations: 3102769\ncpu: 0.2204424254593217 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.3733887736020565,
            "unit": "us/iter",
            "extra": "iterations: 214922\ncpu: 3.372956067782741 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.3066847993021906,
            "unit": "us/iter",
            "extra": "iterations: 504615\ncpu: 1.3066565143723672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.4040004911298058,
            "unit": "us/iter",
            "extra": "iterations: 482561\ncpu: 1.4038675276286616 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.3624028188007493,
            "unit": "us/iter",
            "extra": "iterations: 296580\ncpu: 2.3622191988670482 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 4.0617139869132,
            "unit": "us/iter",
            "extra": "iterations: 163510\ncpu: 4.0639147391596735 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.913716487695882,
            "unit": "us/iter",
            "extra": "iterations: 178800\ncpu: 3.913359004474274 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.719335845485792,
            "unit": "us/iter",
            "extra": "iterations: 260998\ncpu: 2.7191112000858086 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.683111093763864,
            "unit": "us/iter",
            "extra": "iterations: 147317\ncpu: 4.6831313018863465 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.7022500275275565,
            "unit": "us/iter",
            "extra": "iterations: 118051\ncpu: 5.7012367197228055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.4425155307884467,
            "unit": "us/iter",
            "extra": "iterations: 503355\ncpu: 1.4424581835880883 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.316768567610012,
            "unit": "us/iter",
            "extra": "iterations: 295555\ncpu: 2.316610458290422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.8066699477394809,
            "unit": "us/iter",
            "extra": "iterations: 875425\ncpu: 0.8065650638261301 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8463724309108638,
            "unit": "us/iter",
            "extra": "iterations: 790066\ncpu: 0.8463759204927163 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.535463836740552,
            "unit": "us/iter",
            "extra": "iterations: 184787\ncpu: 3.5351094232820337 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.593355611645616,
            "unit": "us/iter",
            "extra": "iterations: 455615\ncpu: 1.5933439812121946 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 4.245769889603513,
            "unit": "us/iter",
            "extra": "iterations: 164860\ncpu: 4.24536750576255 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8795825034829795,
            "unit": "us/iter",
            "extra": "iterations: 828965\ncpu: 0.8795772463252506 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8427594646240492,
            "unit": "us/iter",
            "extra": "iterations: 813186\ncpu: 0.8426311852393082 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.334015964189059,
            "unit": "us/iter",
            "extra": "iterations: 302928\ncpu: 2.333969755189417 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 2.056907653530171,
            "unit": "us/iter",
            "extra": "iterations: 309465\ncpu: 2.0567301730405294 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.892281503396252,
            "unit": "us/iter",
            "extra": "iterations: 119995\ncpu: 5.891793208050566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.7368450707974064,
            "unit": "us/iter",
            "extra": "iterations: 187363\ncpu: 3.7365048862368266 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.299916282188946,
            "unit": "us/iter",
            "extra": "iterations: 299757\ncpu: 2.299832377558999 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.991483533903893,
            "unit": "us/iter",
            "extra": "iterations: 237822\ncpu: 2.9912087107164873 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.2234473480584911,
            "unit": "us/iter",
            "extra": "iterations: 3143018\ncpu: 0.22344873207852203 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.3877674942172384,
            "unit": "us/iter",
            "extra": "iterations: 210541\ncpu: 3.387141991346316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2934811614706998,
            "unit": "us/iter",
            "extra": "iterations: 559704\ncpu: 1.2934464323999577 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.4289355623167945,
            "unit": "us/iter",
            "extra": "iterations: 470020\ncpu: 1.4288997489468709 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.5261712247622894,
            "unit": "us/iter",
            "extra": "iterations: 285280\ncpu: 2.5257936904093854 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 4.146745269224409,
            "unit": "us/iter",
            "extra": "iterations: 164825\ncpu: 4.1467008766876585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.7345516135633767,
            "unit": "us/iter",
            "extra": "iterations: 180873\ncpu: 3.7344438915702485 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.839522797978103,
            "unit": "us/iter",
            "extra": "iterations: 256185\ncpu: 2.8394700275192846 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.819312237885241,
            "unit": "us/iter",
            "extra": "iterations: 147836\ncpu: 4.818863328282647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 6.134977590350506,
            "unit": "us/iter",
            "extra": "iterations: 114415\ncpu: 6.134922973386242 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3720540091465647,
            "unit": "us/iter",
            "extra": "iterations: 508562\ncpu: 1.3719216221423987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.422310531723129,
            "unit": "us/iter",
            "extra": "iterations: 289117\ncpu: 2.4222637790237584 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.8423705993738705,
            "unit": "us/iter",
            "extra": "iterations: 851839\ncpu: 0.842228052484129 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.893762683230746,
            "unit": "us/iter",
            "extra": "iterations: 798515\ncpu: 0.8937657138563286 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.680751124714193,
            "unit": "us/iter",
            "extra": "iterations: 194049\ncpu: 3.67968730063025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.6533277807105475,
            "unit": "us/iter",
            "extra": "iterations: 414759\ncpu: 1.6533114073474826 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 4.337158630603904,
            "unit": "us/iter",
            "extra": "iterations: 164861\ncpu: 4.33644603635795 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8834782140167177,
            "unit": "us/iter",
            "extra": "iterations: 765584\ncpu: 0.8834633338732601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8929596562338343,
            "unit": "us/iter",
            "extra": "iterations: 771222\ncpu: 0.8927308297741094 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.3412273252918667,
            "unit": "us/iter",
            "extra": "iterations: 298339\ncpu: 2.341112278314268 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 2.0469829659994248,
            "unit": "us/iter",
            "extra": "iterations: 342785\ncpu: 2.046643960499933 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.718715448534533,
            "unit": "us/iter",
            "extra": "iterations: 123714\ncpu: 5.71819687343375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.7167843458420595,
            "unit": "us/iter",
            "extra": "iterations: 183159\ncpu: 3.7166847984540063 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.4479709149841717,
            "unit": "us/iter",
            "extra": "iterations: 299295\ncpu: 2.446443158088195 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.9902183967371063,
            "unit": "us/iter",
            "extra": "iterations: 232563\ncpu: 2.9901936249533216 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 13.832985803980867,
            "unit": "ns/iter",
            "extra": "iterations: 51651753\ncpu: 13.829951482963828 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 52.04987452775907,
            "unit": "ns/iter",
            "extra": "iterations: 13605001\ncpu: 52.049451668544364 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 60.41221184442339,
            "unit": "ns/iter",
            "extra": "iterations: 11740012\ncpu: 60.406715257189205 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 71.97317095524578,
            "unit": "ns/iter",
            "extra": "iterations: 11203977\ncpu: 71.96868040696603 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 83.31300547907543,
            "unit": "ns/iter",
            "extra": "iterations: 8491944\ncpu: 83.31214160149803 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 90.04505310739412,
            "unit": "ns/iter",
            "extra": "iterations: 7969417\ncpu: 90.03649564327746 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 105.96037867759588,
            "unit": "ns/iter",
            "extra": "iterations: 6870013\ncpu: 105.94891654499203 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 118.38835818768844,
            "unit": "ns/iter",
            "extra": "iterations: 5898171\ncpu: 118.3680198488637 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 138.9356319497753,
            "unit": "ns/iter",
            "extra": "iterations: 5419521\ncpu: 138.93427408067433 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 159.6218294990078,
            "unit": "ns/iter",
            "extra": "iterations: 4450519\ncpu: 159.59007207924185 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 71.32903527323576,
            "unit": "ns/iter",
            "extra": "iterations: 9564470\ncpu: 71.3272522157549 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 79.11198682410011,
            "unit": "ns/iter",
            "extra": "iterations: 8820368\ncpu: 79.11132744121339 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 86.49276634171802,
            "unit": "ns/iter",
            "extra": "iterations: 8081319\ncpu: 86.48180303240218 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 97.56609075694749,
            "unit": "ns/iter",
            "extra": "iterations: 7256635\ncpu: 98.49995817619937 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 107.10637689301629,
            "unit": "ns/iter",
            "extra": "iterations: 6733624\ncpu: 107.087781260138 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 121.01508785995172,
            "unit": "ns/iter",
            "extra": "iterations: 5937290\ncpu: 121.01330792331508 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 135.93709413458973,
            "unit": "ns/iter",
            "extra": "iterations: 5300094\ncpu: 135.91979689416894 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 150.44891511379262,
            "unit": "ns/iter",
            "extra": "iterations: 4679016\ncpu: 150.4415537369332 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 169.68402028969544,
            "unit": "ns/iter",
            "extra": "iterations: 4107903\ncpu: 169.68198031939653 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 120.72445923036237,
            "unit": "ns/iter",
            "extra": "iterations: 5956095\ncpu: 120.71800684844668 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 221.79286915909432,
            "unit": "ns/iter",
            "extra": "iterations: 3277117\ncpu: 221.23927922013053 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 392.86834937403296,
            "unit": "ns/iter",
            "extra": "iterations: 1702415\ncpu: 392.82198288902293 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 850.3962553206198,
            "unit": "ns/iter",
            "extra": "iterations: 868806\ncpu: 850.2813113629942 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1854.4046293409813,
            "unit": "ns/iter",
            "extra": "iterations: 387053\ncpu: 1854.1326898382902 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 4054.204140180319,
            "unit": "ns/iter",
            "extra": "iterations: 166273\ncpu: 4054.1336296331056 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 10180.93920584301,
            "unit": "ns/iter",
            "extra": "iterations: 67342\ncpu: 10178.5354459324 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 26990.691375153103,
            "unit": "ns/iter",
            "extra": "iterations: 24499\ncpu: 26990.32217641441 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 70129.2779999676,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 70110.34260000315 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}