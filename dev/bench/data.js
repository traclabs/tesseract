window.BENCHMARK_DATA = {
  "lastUpdate": 1593186141746,
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
          "id": "3d8a7a0108351bd64b4ce4f7f803a329c34ee3c7",
          "message": "Add plotting JointTrajectory to Visualization\n\nA Joint Trajectory currently contains joint names and a TrajArray, but that will likely change soon.",
          "timestamp": "2020-06-25T15:10:06-05:00",
          "tree_id": "c51f149f77a61d0d8696d76da8c60f2db68a88d2",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/3d8a7a0108351bd64b4ce4f7f803a329c34ee3c7"
        },
        "date": 1593118860373,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 77.83755740947187,
            "unit": "us/iter",
            "extra": "iterations: 9110\ncpu: 77.81684248079033 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 76.74931391433991,
            "unit": "us/iter",
            "extra": "iterations: 8617\ncpu: 76.74249959382617 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 73.86180288719513,
            "unit": "us/iter",
            "extra": "iterations: 9421\ncpu: 73.86109914021866 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 77.83798502071379,
            "unit": "us/iter",
            "extra": "iterations: 9413\ncpu: 77.8234908105811 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 83.26601333945554,
            "unit": "us/iter",
            "extra": "iterations: 8696\ncpu: 83.25908797148116 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 99.95019874799044,
            "unit": "us/iter",
            "extra": "iterations: 7029\ncpu: 99.93637857447717 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 141.380800377046,
            "unit": "us/iter",
            "extra": "iterations: 4774\ncpu: 141.3568475073314 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 239.96750376449833,
            "unit": "us/iter",
            "extra": "iterations: 2922\ncpu: 239.9521769336071 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 520.0337484099881,
            "unit": "us/iter",
            "extra": "iterations: 1415\ncpu: 519.9961130742043 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1354.7796948526025,
            "unit": "us/iter",
            "extra": "iterations: 544\ncpu: 1354.6460404411753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.273251776328266,
            "unit": "us/iter",
            "extra": "iterations: 170858\ncpu: 4.2728321764272135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 5.995954897978609,
            "unit": "us/iter",
            "extra": "iterations: 121591\ncpu: 5.9945713991989455 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 36.16727002383469,
            "unit": "us/iter",
            "extra": "iterations: 19302\ncpu: 36.16056838669568 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 19.44425829852906,
            "unit": "us/iter",
            "extra": "iterations: 36392\ncpu: 19.441960540778204 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.86311970537936,
            "unit": "us/iter",
            "extra": "iterations: 145407\ncpu: 4.8627872110696115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.2213994892546305,
            "unit": "us/iter",
            "extra": "iterations: 114734\ncpu: 6.2197787403908125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.4725135820486015,
            "unit": "us/iter",
            "extra": "iterations: 154984\ncpu: 4.471918081866506 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 57.82243601553708,
            "unit": "us/iter",
            "extra": "iterations: 11073\ncpu: 57.81943547367472 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 55.01222375274361,
            "unit": "us/iter",
            "extra": "iterations: 11906\ncpu: 55.010931127162515 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.41716913000073,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.416350590000007 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 35.805814157132446,
            "unit": "us/iter",
            "extra": "iterations: 20442\ncpu: 35.79860796399567 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 59.55992752854914,
            "unit": "us/iter",
            "extra": "iterations: 11301\ncpu: 59.56017317051567 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.47938333950518114,
            "unit": "us/iter",
            "extra": "iterations: 1415072\ncpu: 0.4792842505540354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.5408939584901442,
            "unit": "us/iter",
            "extra": "iterations: 1189355\ncpu: 0.5408591547519447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 10.761410479181734,
            "unit": "us/iter",
            "extra": "iterations: 67219\ncpu: 10.759927460985747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 20.50054914104296,
            "unit": "us/iter",
            "extra": "iterations: 33587\ncpu: 20.49835543513861 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 59.11524840492809,
            "unit": "us/iter",
            "extra": "iterations: 11755\ncpu: 59.112741131433374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.5153774452930707,
            "unit": "us/iter",
            "extra": "iterations: 1242029\ncpu: 0.5152882887597632 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.5036437741912174,
            "unit": "us/iter",
            "extra": "iterations: 1260021\ncpu: 0.5036250681536235 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 69.06840489827566,
            "unit": "us/iter",
            "extra": "iterations: 11351\ncpu: 69.03667342084417 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 6.022040506947691,
            "unit": "us/iter",
            "extra": "iterations: 122300\ncpu: 6.021164677023733 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 4.832613420183838,
            "unit": "us/iter",
            "extra": "iterations: 121742\ncpu: 4.832517824579845 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 12.039241177488057,
            "unit": "us/iter",
            "extra": "iterations: 63389\ncpu: 12.037811260628818 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 61.343401422589686,
            "unit": "us/iter",
            "extra": "iterations: 10966\ncpu: 61.34300702170364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 3.9763030536509305,
            "unit": "us/iter",
            "extra": "iterations: 179097\ncpu: 3.975426444887407 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 3.7905286014141044,
            "unit": "us/iter",
            "extra": "iterations: 187718\ncpu: 3.789995685016874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 5.822827535742121,
            "unit": "us/iter",
            "extra": "iterations: 118210\ncpu: 5.822537044243317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 35.42084590773684,
            "unit": "us/iter",
            "extra": "iterations: 20942\ncpu: 35.41972070480373 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 21.523419874632374,
            "unit": "us/iter",
            "extra": "iterations: 32705\ncpu: 21.52030038220469 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 5.001793039996301,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.001676630000063 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.405389690342603,
            "unit": "us/iter",
            "extra": "iterations: 103631\ncpu: 6.404800301068171 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.4948745079701125,
            "unit": "us/iter",
            "extra": "iterations: 149890\ncpu: 4.4938335445993465 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 59.98489493942772,
            "unit": "us/iter",
            "extra": "iterations: 12469\ncpu: 59.98457262009778 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 60.393535383422694,
            "unit": "us/iter",
            "extra": "iterations: 12845\ncpu: 60.3883033086807 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 4.793013107963565,
            "unit": "us/iter",
            "extra": "iterations: 143348\ncpu: 4.792976281496769 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 37.01269386297061,
            "unit": "us/iter",
            "extra": "iterations: 18201\ncpu: 37.008283116312306 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 62.60110907495609,
            "unit": "us/iter",
            "extra": "iterations: 11405\ncpu: 62.600552652345094 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.4911125513968993,
            "unit": "us/iter",
            "extra": "iterations: 1388459\ncpu: 0.49108584769157737 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5165331102616125,
            "unit": "us/iter",
            "extra": "iterations: 1362493\ncpu: 0.5165200753324997 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 10.6465438888134,
            "unit": "us/iter",
            "extra": "iterations: 58352\ncpu: 10.646430953523419 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 21.640117009036917,
            "unit": "us/iter",
            "extra": "iterations: 32177\ncpu: 21.636616869192213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 57.54756370280384,
            "unit": "us/iter",
            "extra": "iterations: 12315\ncpu: 57.54433008526154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.49618910756049095,
            "unit": "us/iter",
            "extra": "iterations: 1516428\ncpu: 0.4960770297040165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.4888640923606549,
            "unit": "us/iter",
            "extra": "iterations: 1504794\ncpu: 0.4888610009077653 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 59.10019483792958,
            "unit": "us/iter",
            "extra": "iterations: 11507\ncpu: 59.08798974537202 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 4.603620894828861,
            "unit": "us/iter",
            "extra": "iterations: 146218\ncpu: 4.603340669411428 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 4.877855373982127,
            "unit": "us/iter",
            "extra": "iterations: 156839\ncpu: 4.877328534356884 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 11.88113390592421,
            "unit": "us/iter",
            "extra": "iterations: 59146\ncpu: 11.88107329320672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 60.34644326577697,
            "unit": "us/iter",
            "extra": "iterations: 11501\ncpu: 60.33617624554411 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 3.803058334885296,
            "unit": "us/iter",
            "extra": "iterations: 177201\ncpu: 3.803030710887628 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 3.8691644065746815,
            "unit": "us/iter",
            "extra": "iterations: 189299\ncpu: 3.8650151400693797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 5.874139587831451,
            "unit": "us/iter",
            "extra": "iterations: 101900\ncpu: 5.873311668302298 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 35.97513455595911,
            "unit": "us/iter",
            "extra": "iterations: 20066\ncpu: 35.97090745539728 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 19.46052073072715,
            "unit": "us/iter",
            "extra": "iterations: 36347\ncpu: 19.45685976834409 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.503560694580793,
            "unit": "us/iter",
            "extra": "iterations: 160039\ncpu: 4.503189216378526 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.058308879807072,
            "unit": "us/iter",
            "extra": "iterations: 107919\ncpu: 6.057836266088448 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.211505476137886,
            "unit": "us/iter",
            "extra": "iterations: 159145\ncpu: 4.21111992208363 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 58.640492694659414,
            "unit": "us/iter",
            "extra": "iterations: 13278\ncpu: 58.63562569664134 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 58.451657525396094,
            "unit": "us/iter",
            "extra": "iterations: 12398\ncpu: 58.43294652363318 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 4.505266180347957,
            "unit": "us/iter",
            "extra": "iterations: 138455\ncpu: 4.505287891372687 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 36.68493810638342,
            "unit": "us/iter",
            "extra": "iterations: 20923\ncpu: 36.682419060364055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 55.00847745178623,
            "unit": "us/iter",
            "extra": "iterations: 11930\ncpu: 55.006982313495996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.461139603334447,
            "unit": "us/iter",
            "extra": "iterations: 1408240\ncpu: 0.46109352170084317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5156571042697085,
            "unit": "us/iter",
            "extra": "iterations: 1383126\ncpu: 0.5156053692866693 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 10.965049141792862,
            "unit": "us/iter",
            "extra": "iterations: 62106\ncpu: 10.9639475090972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 20.3014952973516,
            "unit": "us/iter",
            "extra": "iterations: 34874\ncpu: 20.299470407753454 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 61.26589269178856,
            "unit": "us/iter",
            "extra": "iterations: 13177\ncpu: 61.26219845184853 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.49755408561650827,
            "unit": "us/iter",
            "extra": "iterations: 1421903\ncpu: 0.4974484637840939 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.5342451551106144,
            "unit": "us/iter",
            "extra": "iterations: 1388525\ncpu: 0.534198720944882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 60.86007536155801,
            "unit": "us/iter",
            "extra": "iterations: 11478\ncpu: 60.85238586861761 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 4.767183538624532,
            "unit": "us/iter",
            "extra": "iterations: 134849\ncpu: 4.766805908831393 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 4.799120801484596,
            "unit": "us/iter",
            "extra": "iterations: 136447\ncpu: 4.798705372782089 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 11.27841656981131,
            "unit": "us/iter",
            "extra": "iterations: 54207\ncpu: 11.275748814728857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 59.442430646389205,
            "unit": "us/iter",
            "extra": "iterations: 13150\ncpu: 59.43844973383947 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.128360984150607,
            "unit": "us/iter",
            "extra": "iterations: 174160\ncpu: 4.127793833256767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 3.9841745800628576,
            "unit": "us/iter",
            "extra": "iterations: 183360\ncpu: 3.983836758289665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 5.729156076250634,
            "unit": "us/iter",
            "extra": "iterations: 125900\ncpu: 5.727784154090538 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 33.58508952427322,
            "unit": "us/iter",
            "extra": "iterations: 20285\ncpu: 33.581875375893766 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 18.648324476326298,
            "unit": "us/iter",
            "extra": "iterations: 38764\ncpu: 18.644247704055267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.42870507988257,
            "unit": "us/iter",
            "extra": "iterations: 132385\ncpu: 4.428677765607867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 5.700326020326067,
            "unit": "us/iter",
            "extra": "iterations: 120060\ncpu: 5.700253073463265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.44315668787123,
            "unit": "us/iter",
            "extra": "iterations: 149016\ncpu: 4.44310842459874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 56.94428420115649,
            "unit": "us/iter",
            "extra": "iterations: 11235\ncpu: 56.94005527369813 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 55.26007368330145,
            "unit": "us/iter",
            "extra": "iterations: 11563\ncpu: 55.24844019718106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 4.6821029375284295,
            "unit": "us/iter",
            "extra": "iterations: 153190\ncpu: 4.681564566877749 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 35.60683064208634,
            "unit": "us/iter",
            "extra": "iterations: 18393\ncpu: 35.60041434241262 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 55.24524616587986,
            "unit": "us/iter",
            "extra": "iterations: 12780\ncpu: 55.242026134585856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.49217989388802896,
            "unit": "us/iter",
            "extra": "iterations: 1450166\ncpu: 0.4921006215840128 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.51920854637955,
            "unit": "us/iter",
            "extra": "iterations: 1391326\ncpu: 0.5205430287366105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 10.765563666549891,
            "unit": "us/iter",
            "extra": "iterations: 66864\ncpu: 10.762493748504559 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 21.160193033254302,
            "unit": "us/iter",
            "extra": "iterations: 32124\ncpu: 21.159169748474657 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 57.461747391256985,
            "unit": "us/iter",
            "extra": "iterations: 12458\ncpu: 57.46127877668987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.5748991067001824,
            "unit": "us/iter",
            "extra": "iterations: 1374343\ncpu: 0.5748302599860403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5596689683272852,
            "unit": "us/iter",
            "extra": "iterations: 1251705\ncpu: 0.5596169321046051 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 58.14582161308979,
            "unit": "us/iter",
            "extra": "iterations: 11419\ncpu: 58.126163061565 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 4.897332316687519,
            "unit": "us/iter",
            "extra": "iterations: 157380\ncpu: 4.897090958190405 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 4.8563392825834635,
            "unit": "us/iter",
            "extra": "iterations: 131053\ncpu: 4.855364722669403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 11.73273445006416,
            "unit": "us/iter",
            "extra": "iterations: 62862\ncpu: 11.732105564570208 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 59.53977048780842,
            "unit": "us/iter",
            "extra": "iterations: 12239\ncpu: 59.53937437699157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.126734727975949,
            "unit": "us/iter",
            "extra": "iterations: 181934\ncpu: 4.12645071839243 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.054815720747594,
            "unit": "us/iter",
            "extra": "iterations: 170399\ncpu: 4.0536853972148394 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.2888658895739695,
            "unit": "us/iter",
            "extra": "iterations: 105607\ncpu: 7.288461030045333 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2007148441969946,
            "unit": "us/iter",
            "extra": "iterations: 619791\ncpu: 1.200706893130107 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3866122293713405,
            "unit": "us/iter",
            "extra": "iterations: 549415\ncpu: 1.3864956599291904 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 6.722061123883869,
            "unit": "us/iter",
            "extra": "iterations: 102644\ncpu: 6.72158528506302 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 7.499622625966039,
            "unit": "us/iter",
            "extra": "iterations: 109255\ncpu: 7.498592613610313 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 34.87843865857103,
            "unit": "us/iter",
            "extra": "iterations: 18935\ncpu: 34.87619065223105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 3.491247949770258,
            "unit": "us/iter",
            "extra": "iterations: 201319\ncpu: 3.4905222855269313 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 17.92722151755445,
            "unit": "us/iter",
            "extra": "iterations: 39577\ncpu: 17.925764661293016 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 19.634461732161757,
            "unit": "us/iter",
            "extra": "iterations: 36140\ncpu: 19.63195415052585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.3517728708930818,
            "unit": "us/iter",
            "extra": "iterations: 520312\ncpu: 1.351639879533829 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.27188152522255,
            "unit": "us/iter",
            "extra": "iterations: 227770\ncpu: 3.2714987575185766 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.6872545740447712,
            "unit": "us/iter",
            "extra": "iterations: 1016879\ncpu: 0.687217843027537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7207932159063782,
            "unit": "us/iter",
            "extra": "iterations: 975075\ncpu: 0.7207840309719713 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 21.62399011154921,
            "unit": "us/iter",
            "extra": "iterations: 32361\ncpu: 21.62313510089335 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.416566299579015,
            "unit": "us/iter",
            "extra": "iterations: 478178\ncpu: 1.4165469929607766 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 17.01325155313472,
            "unit": "us/iter",
            "extra": "iterations: 37666\ncpu: 17.008537593585505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.7196632573733155,
            "unit": "us/iter",
            "extra": "iterations: 1036774\ncpu: 0.7181233923690216 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.735745019809597,
            "unit": "us/iter",
            "extra": "iterations: 901321\ncpu: 0.735707579208729 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 22.688611127538362,
            "unit": "us/iter",
            "extra": "iterations: 30447\ncpu: 22.68497030906159 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 6.846592886712334,
            "unit": "us/iter",
            "extra": "iterations: 103637\ncpu: 6.846216872352588 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 18.96187966154663,
            "unit": "us/iter",
            "extra": "iterations: 35101\ncpu: 18.960192644084042 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 23.886692230386597,
            "unit": "us/iter",
            "extra": "iterations: 25870\ncpu: 23.886481754928585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 23.343476724279174,
            "unit": "us/iter",
            "extra": "iterations: 32115\ncpu: 23.338670994862344 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.181360070000665,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.180873319999932 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.15719784162208,
            "unit": "us/iter",
            "extra": "iterations: 173927\ncpu: 4.156327349980177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.687898046887246,
            "unit": "us/iter",
            "extra": "iterations: 104244\ncpu: 6.687494330608901 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2136179054492573,
            "unit": "us/iter",
            "extra": "iterations: 618080\ncpu: 1.2135055170851603 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.2722853167984567,
            "unit": "us/iter",
            "extra": "iterations: 511428\ncpu: 1.2722095857090252 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 6.4356693619359975,
            "unit": "us/iter",
            "extra": "iterations: 120458\ncpu: 6.435343845987817 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.44457943881335,
            "unit": "us/iter",
            "extra": "iterations: 106988\ncpu: 7.442796322952181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 35.401973963609024,
            "unit": "us/iter",
            "extra": "iterations: 19780\ncpu: 35.39894924165862 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 3.472651068489822,
            "unit": "us/iter",
            "extra": "iterations: 199019\ncpu: 3.4724198895582195 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 17.99255420040685,
            "unit": "us/iter",
            "extra": "iterations: 40996\ncpu: 17.991505634696576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 20.92836303789436,
            "unit": "us/iter",
            "extra": "iterations: 35393\ncpu: 20.923454920464927 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.472053352320247,
            "unit": "us/iter",
            "extra": "iterations: 543519\ncpu: 1.4718918050702936 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.4758133583604827,
            "unit": "us/iter",
            "extra": "iterations: 175261\ncpu: 3.4751070631800403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.6667255944559852,
            "unit": "us/iter",
            "extra": "iterations: 993934\ncpu: 0.6666859882044535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.6704833537676633,
            "unit": "us/iter",
            "extra": "iterations: 1036661\ncpu: 0.6704153305661019 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 20.754376086767454,
            "unit": "us/iter",
            "extra": "iterations: 34391\ncpu: 20.75445061207876 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.484212231498831,
            "unit": "us/iter",
            "extra": "iterations: 493480\ncpu: 1.484139620653331 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 17.096581566708537,
            "unit": "us/iter",
            "extra": "iterations: 41935\ncpu: 17.09437429354924 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.6987822949497904,
            "unit": "us/iter",
            "extra": "iterations: 1057766\ncpu: 0.6987438138491765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7141188586963008,
            "unit": "us/iter",
            "extra": "iterations: 934370\ncpu: 0.7139495253486335 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 23.618819642743365,
            "unit": "us/iter",
            "extra": "iterations: 30678\ncpu: 23.616924408370668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 7.2107126095492,
            "unit": "us/iter",
            "extra": "iterations: 105087\ncpu: 7.209256216277882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 19.277610754693658,
            "unit": "us/iter",
            "extra": "iterations: 36319\ncpu: 19.276375065392838 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 23.25408737655704,
            "unit": "us/iter",
            "extra": "iterations: 27948\ncpu: 23.25176112780935 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 23.781875552627604,
            "unit": "us/iter",
            "extra": "iterations: 31893\ncpu: 23.780822468880576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.748684137208487,
            "unit": "us/iter",
            "extra": "iterations: 122034\ncpu: 4.748597169641134 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.284245255918474,
            "unit": "us/iter",
            "extra": "iterations: 178222\ncpu: 4.283977225033938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.120489867669983,
            "unit": "us/iter",
            "extra": "iterations: 109501\ncpu: 7.1200723098418015 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.2401770791714175,
            "unit": "us/iter",
            "extra": "iterations: 588155\ncpu: 1.2400079791891654 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.3993073758807448,
            "unit": "us/iter",
            "extra": "iterations: 550863\ncpu: 1.399190448441829 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 6.453885603880512,
            "unit": "us/iter",
            "extra": "iterations: 120074\ncpu: 6.453234413778233 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 7.177568963130523,
            "unit": "us/iter",
            "extra": "iterations: 101286\ncpu: 7.176997808186608 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 36.18758780777921,
            "unit": "us/iter",
            "extra": "iterations: 20226\ncpu: 36.178091367546685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 3.6698175808374516,
            "unit": "us/iter",
            "extra": "iterations: 193472\ncpu: 3.6694618652828175 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 17.07685400501156,
            "unit": "us/iter",
            "extra": "iterations: 41111\ncpu: 17.074466785045527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 18.690600927052472,
            "unit": "us/iter",
            "extra": "iterations: 36244\ncpu: 18.690661543980223 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.2953274919736018,
            "unit": "us/iter",
            "extra": "iterations: 532981\ncpu: 1.295145342892171 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.383774171343188,
            "unit": "us/iter",
            "extra": "iterations: 206298\ncpu: 3.38359267661347 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.6945351892934257,
            "unit": "us/iter",
            "extra": "iterations: 1075526\ncpu: 0.694529750094366 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7509319038614063,
            "unit": "us/iter",
            "extra": "iterations: 848565\ncpu: 0.7507790175178095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 22.153545829895318,
            "unit": "us/iter",
            "extra": "iterations: 31486\ncpu: 22.151774820555502 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.4230042164076726,
            "unit": "us/iter",
            "extra": "iterations: 465325\ncpu: 1.4227112469779106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 17.37417731126071,
            "unit": "us/iter",
            "extra": "iterations: 39394\ncpu: 17.372281362644106 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.7072083029111093,
            "unit": "us/iter",
            "extra": "iterations: 880655\ncpu: 0.7031478172496625 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.702356144945858,
            "unit": "us/iter",
            "extra": "iterations: 882343\ncpu: 0.7022749486310964 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 23.224353098386597,
            "unit": "us/iter",
            "extra": "iterations: 30306\ncpu: 23.22288477529218 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 7.168163942487943,
            "unit": "us/iter",
            "extra": "iterations: 83389\ncpu: 7.165680389499623 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 18.42219232267783,
            "unit": "us/iter",
            "extra": "iterations: 35924\ncpu: 18.420573655495183 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 25.753976368993143,
            "unit": "us/iter",
            "extra": "iterations: 28141\ncpu: 25.74894587967759 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 24.316482052614866,
            "unit": "us/iter",
            "extra": "iterations: 30673\ncpu: 24.316249568024265 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.763336387254901,
            "unit": "us/iter",
            "extra": "iterations: 136655\ncpu: 4.762749507884972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.313133102515771,
            "unit": "us/iter",
            "extra": "iterations: 172431\ncpu: 4.312836705696785 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.601049311116397,
            "unit": "us/iter",
            "extra": "iterations: 99146\ncpu: 6.601080537792786 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.200587678972489,
            "unit": "us/iter",
            "extra": "iterations: 539468\ncpu: 1.2002528231517071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.2966238683503861,
            "unit": "us/iter",
            "extra": "iterations: 512084\ncpu: 1.2964782027948072 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 6.316440710251017,
            "unit": "us/iter",
            "extra": "iterations: 109201\ncpu: 6.314282369209074 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 7.4100366556405355,
            "unit": "us/iter",
            "extra": "iterations: 87981\ncpu: 7.41006194519269 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 35.405127113226385,
            "unit": "us/iter",
            "extra": "iterations: 18692\ncpu: 35.40524020971607 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 3.6196805549903313,
            "unit": "us/iter",
            "extra": "iterations: 196760\ncpu: 3.6192733889003157 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 18.05943857242839,
            "unit": "us/iter",
            "extra": "iterations: 40096\ncpu: 18.057666226057634 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 19.92006620764339,
            "unit": "us/iter",
            "extra": "iterations: 37035\ncpu: 19.87397046037551 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.385497595509937,
            "unit": "us/iter",
            "extra": "iterations: 522772\ncpu: 1.38549232743911 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.266459517250027,
            "unit": "us/iter",
            "extra": "iterations: 210917\ncpu: 3.266175158948674 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.6869164392828429,
            "unit": "us/iter",
            "extra": "iterations: 1006741\ncpu: 0.6868436668418207 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6934896084964671,
            "unit": "us/iter",
            "extra": "iterations: 1062647\ncpu: 0.693301710728013 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 22.30452341635272,
            "unit": "us/iter",
            "extra": "iterations: 29189\ncpu: 22.302358902325967 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4855709119745701,
            "unit": "us/iter",
            "extra": "iterations: 484213\ncpu: 1.4853830855429155 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 17.23485871718408,
            "unit": "us/iter",
            "extra": "iterations: 36841\ncpu: 17.233824244727256 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6731872889570965,
            "unit": "us/iter",
            "extra": "iterations: 925463\ncpu: 0.6731468918800791 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.6821366055181894,
            "unit": "us/iter",
            "extra": "iterations: 1080542\ncpu: 0.6819850871136718 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 22.89647225171094,
            "unit": "us/iter",
            "extra": "iterations: 31083\ncpu: 22.894396486825705 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 7.229819432470532,
            "unit": "us/iter",
            "extra": "iterations: 102056\ncpu: 7.228499353296239 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 18.96110697002253,
            "unit": "us/iter",
            "extra": "iterations: 35954\ncpu: 18.959193580686566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 24.33407968291178,
            "unit": "us/iter",
            "extra": "iterations: 26618\ncpu: 24.325061574873878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 23.396572277834675,
            "unit": "us/iter",
            "extra": "iterations: 29774\ncpu: 23.394639383354125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.901952190721893,
            "unit": "us/iter",
            "extra": "iterations: 131920\ncpu: 4.901582838083721 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.1851847624994528,
            "unit": "us/iter",
            "extra": "iterations: 3705844\ncpu: 0.18515611693314088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 2.770438154221744,
            "unit": "us/iter",
            "extra": "iterations: 258991\ncpu: 2.7701291048723586 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.090490733203043,
            "unit": "us/iter",
            "extra": "iterations: 648552\ncpu: 1.0903586836521804 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.1412440897593181,
            "unit": "us/iter",
            "extra": "iterations: 569520\ncpu: 1.1411684119960877 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 1.962170571632855,
            "unit": "us/iter",
            "extra": "iterations: 357152\ncpu: 1.96164593506404 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 2.956684222871768,
            "unit": "us/iter",
            "extra": "iterations: 221669\ncpu: 2.9564795167569535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.1058772351537693,
            "unit": "us/iter",
            "extra": "iterations: 235051\ncpu: 3.104765208401608 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.051980092326178,
            "unit": "us/iter",
            "extra": "iterations: 270348\ncpu: 2.051772892716042 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 3.535599576812091,
            "unit": "us/iter",
            "extra": "iterations: 191877\ncpu: 3.5350659172282017 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 4.508467942437242,
            "unit": "us/iter",
            "extra": "iterations: 155096\ncpu: 4.507971308092903 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.205720189623752,
            "unit": "us/iter",
            "extra": "iterations: 656248\ncpu: 1.2054536029062244 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 1.9499878784421498,
            "unit": "us/iter",
            "extra": "iterations: 315471\ncpu: 1.9497896225009361 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.6389275116237606,
            "unit": "us/iter",
            "extra": "iterations: 1156682\ncpu: 0.6388618531281588 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7134495857106946,
            "unit": "us/iter",
            "extra": "iterations: 1054215\ncpu: 0.7133879882187039 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 2.795116808907451,
            "unit": "us/iter",
            "extra": "iterations: 243603\ncpu: 2.794964232788678 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.3031106565615758,
            "unit": "us/iter",
            "extra": "iterations: 552439\ncpu: 1.302922749842073 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.3350891598153147,
            "unit": "us/iter",
            "extra": "iterations: 215310\ncpu: 3.335102842413269 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6825597871964366,
            "unit": "us/iter",
            "extra": "iterations: 1049606\ncpu: 0.682434065735135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6740396827125386,
            "unit": "us/iter",
            "extra": "iterations: 918158\ncpu: 0.6740343916842158 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 1.836748170216125,
            "unit": "us/iter",
            "extra": "iterations: 380646\ncpu: 1.836449076044409 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.467475273303844,
            "unit": "us/iter",
            "extra": "iterations: 488925\ncpu: 1.4674676831824753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 4.528491149888024,
            "unit": "us/iter",
            "extra": "iterations: 159546\ncpu: 4.527879226053972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 2.9230458436362485,
            "unit": "us/iter",
            "extra": "iterations: 238201\ncpu: 2.9229962888485015 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 1.8444243904659834,
            "unit": "us/iter",
            "extra": "iterations: 395876\ncpu: 1.8440234467358723 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.4390296793956723,
            "unit": "us/iter",
            "extra": "iterations: 277600\ncpu: 2.438990021613907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.17832190999317857,
            "unit": "us/iter",
            "extra": "iterations: 4063114\ncpu: 0.17831215688262728 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 2.5125360532783736,
            "unit": "us/iter",
            "extra": "iterations: 278241\ncpu: 2.5125229099953685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.016187234417702,
            "unit": "us/iter",
            "extra": "iterations: 713763\ncpu: 1.0161909849628254 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.0829394650592514,
            "unit": "us/iter",
            "extra": "iterations: 699629\ncpu: 1.0829097064301525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 1.9024150398309412,
            "unit": "us/iter",
            "extra": "iterations: 386640\ncpu: 1.9024041433891907 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.3780130074941472,
            "unit": "us/iter",
            "extra": "iterations: 199116\ncpu: 3.3777833172622542 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.390121267617709,
            "unit": "us/iter",
            "extra": "iterations: 215144\ncpu: 3.3898668938014165 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.414449354240887,
            "unit": "us/iter",
            "extra": "iterations: 293608\ncpu: 2.4143768051279646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 3.4734955397323795,
            "unit": "us/iter",
            "extra": "iterations: 192253\ncpu: 3.473288645690857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 4.7590159527056155,
            "unit": "us/iter",
            "extra": "iterations: 159346\ncpu: 4.758858044758034 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.155283290256882,
            "unit": "us/iter",
            "extra": "iterations: 579201\ncpu: 1.1551885010557696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 1.8399042147345965,
            "unit": "us/iter",
            "extra": "iterations: 393714\ncpu: 1.8399093098035764 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.6763183053953286,
            "unit": "us/iter",
            "extra": "iterations: 1069630\ncpu: 0.6762940147527595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.6625264027850243,
            "unit": "us/iter",
            "extra": "iterations: 981298\ncpu: 0.6623675611282126 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 2.698947454943202,
            "unit": "us/iter",
            "extra": "iterations: 245751\ncpu: 2.6988590728014312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.201455093792167,
            "unit": "us/iter",
            "extra": "iterations: 547274\ncpu: 1.201103416204691 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.290189663530652,
            "unit": "us/iter",
            "extra": "iterations: 216573\ncpu: 3.2901565569114846 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.6774737496327422,
            "unit": "us/iter",
            "extra": "iterations: 1018481\ncpu: 0.6774392109425866 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.690124018437513,
            "unit": "us/iter",
            "extra": "iterations: 998408\ncpu: 0.6900799512824541 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 1.790792283915353,
            "unit": "us/iter",
            "extra": "iterations: 386595\ncpu: 1.7906058174575292 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.6045142589406511,
            "unit": "us/iter",
            "extra": "iterations: 427942\ncpu: 1.6041358385014817 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 4.581674211296759,
            "unit": "us/iter",
            "extra": "iterations: 162102\ncpu: 4.581703896312267 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 2.9139295902164153,
            "unit": "us/iter",
            "extra": "iterations: 241884\ncpu: 2.9136914182004334 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 1.7435558120314312,
            "unit": "us/iter",
            "extra": "iterations: 375170\ncpu: 1.7435609830210483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.290599984363478,
            "unit": "us/iter",
            "extra": "iterations: 319760\ncpu: 2.2850795721790567 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.18228329493725481,
            "unit": "us/iter",
            "extra": "iterations: 3701764\ncpu: 0.18224172259495797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 2.636876251555552,
            "unit": "us/iter",
            "extra": "iterations: 285345\ncpu: 2.636451313322414 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.0756168427216282,
            "unit": "us/iter",
            "extra": "iterations: 580785\ncpu: 1.0755050698623592 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.1535454964445493,
            "unit": "us/iter",
            "extra": "iterations: 574979\ncpu: 1.1533377566832987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 1.8933714115496971,
            "unit": "us/iter",
            "extra": "iterations: 387737\ncpu: 1.8931723952060424 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.144576521119188,
            "unit": "us/iter",
            "extra": "iterations: 242371\ncpu: 3.1441397031823204 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.064794029045457,
            "unit": "us/iter",
            "extra": "iterations: 222410\ncpu: 3.064436252866229 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.1390716710486983,
            "unit": "us/iter",
            "extra": "iterations: 316376\ncpu: 2.1388100266771475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 3.505330691644964,
            "unit": "us/iter",
            "extra": "iterations: 203153\ncpu: 3.5049419698453925 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 4.401056278087256,
            "unit": "us/iter",
            "extra": "iterations: 151320\ncpu: 4.400221008458928 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.144366395267077,
            "unit": "us/iter",
            "extra": "iterations: 624787\ncpu: 1.1442430284241056 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 1.7802295880242243,
            "unit": "us/iter",
            "extra": "iterations: 386697\ncpu: 1.7799952003765351 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.6736018141665383,
            "unit": "us/iter",
            "extra": "iterations: 1079614\ncpu: 0.6735470547806691 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.7165641056561152,
            "unit": "us/iter",
            "extra": "iterations: 1011775\ncpu: 0.7165052012552015 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 2.8441814360322337,
            "unit": "us/iter",
            "extra": "iterations: 256206\ncpu: 2.843640340195003 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.281999030374126,
            "unit": "us/iter",
            "extra": "iterations: 582699\ncpu: 1.2818352425523214 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.2909731897233923,
            "unit": "us/iter",
            "extra": "iterations: 206115\ncpu: 3.2905120636538467 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.7185795964133163,
            "unit": "us/iter",
            "extra": "iterations: 961331\ncpu: 0.7185111173986676 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.7009253602747405,
            "unit": "us/iter",
            "extra": "iterations: 936646\ncpu: 0.7008554224327994 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 1.8404499206067328,
            "unit": "us/iter",
            "extra": "iterations: 388573\ncpu: 1.840304524503768 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.6152748752859956,
            "unit": "us/iter",
            "extra": "iterations: 466266\ncpu: 1.615110745797447 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 4.4187669590794965,
            "unit": "us/iter",
            "extra": "iterations: 151497\ncpu: 4.418613563305116 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 2.740662335305074,
            "unit": "us/iter",
            "extra": "iterations: 237031\ncpu: 2.740327914914092 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 1.8405111728399277,
            "unit": "us/iter",
            "extra": "iterations: 389158\ncpu: 1.8403366421864422 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.3849394429371595,
            "unit": "us/iter",
            "extra": "iterations: 304275\ncpu: 2.384663166543317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.20468385397891634,
            "unit": "us/iter",
            "extra": "iterations: 3854510\ncpu: 0.20467646600994366 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 2.480172665073179,
            "unit": "us/iter",
            "extra": "iterations: 271850\ncpu: 2.4800117196984734 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.0875642269097243,
            "unit": "us/iter",
            "extra": "iterations: 668318\ncpu: 1.0873863325542832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.1466693736109546,
            "unit": "us/iter",
            "extra": "iterations: 590703\ncpu: 1.1465393404129587 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 1.9755483678878525,
            "unit": "us/iter",
            "extra": "iterations: 377854\ncpu: 1.9752228532713825 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.053309861234322,
            "unit": "us/iter",
            "extra": "iterations: 230174\ncpu: 3.0531108074759796 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.0257648925697906,
            "unit": "us/iter",
            "extra": "iterations: 231592\ncpu: 3.025291370168418 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.1683357711040943,
            "unit": "us/iter",
            "extra": "iterations: 335279\ncpu: 2.1680140748452215 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 3.4695328778536743,
            "unit": "us/iter",
            "extra": "iterations: 205351\ncpu: 3.4688922089494607 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 4.788397826983412,
            "unit": "us/iter",
            "extra": "iterations: 157845\ncpu: 4.788367936900203 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.1759513173349327,
            "unit": "us/iter",
            "extra": "iterations: 568724\ncpu: 1.1758709848713638 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 1.8062194478538427,
            "unit": "us/iter",
            "extra": "iterations: 380587\ncpu: 1.805972726341085 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.6534356060675355,
            "unit": "us/iter",
            "extra": "iterations: 1092106\ncpu: 0.6533561458319774 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.7344618349888381,
            "unit": "us/iter",
            "extra": "iterations: 894196\ncpu: 0.7343539514826648 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 2.8023549321248216,
            "unit": "us/iter",
            "extra": "iterations: 257607\ncpu: 2.8016656457316427 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.2969129216753326,
            "unit": "us/iter",
            "extra": "iterations: 557923\ncpu: 1.296879051410354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.269036290988127,
            "unit": "us/iter",
            "extra": "iterations: 218732\ncpu: 3.2686482544849427 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.6951816632954818,
            "unit": "us/iter",
            "extra": "iterations: 1008949\ncpu: 0.6951841549969769 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.7334532822430315,
            "unit": "us/iter",
            "extra": "iterations: 1009188\ncpu: 0.733420280463113 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 1.7823056411823157,
            "unit": "us/iter",
            "extra": "iterations: 378254\ncpu: 1.7820704235779274 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.5758678870065101,
            "unit": "us/iter",
            "extra": "iterations: 481232\ncpu: 1.5756967637231456 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 4.557178130984072,
            "unit": "us/iter",
            "extra": "iterations: 149362\ncpu: 4.556539367442741 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 2.8553999212077326,
            "unit": "us/iter",
            "extra": "iterations: 243678\ncpu: 2.8552528993180095 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 1.7158514041709108,
            "unit": "us/iter",
            "extra": "iterations: 384782\ncpu: 1.7155432088819427 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.4814272574715464,
            "unit": "us/iter",
            "extra": "iterations: 298553\ncpu: 2.481210666113011 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 11.15316748798528,
            "unit": "ns/iter",
            "extra": "iterations: 58288682\ncpu: 11.15110396560337 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 41.41821522861632,
            "unit": "ns/iter",
            "extra": "iterations: 16376484\ncpu: 41.41447205639283 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 50.07374999364569,
            "unit": "ns/iter",
            "extra": "iterations: 14148408\ncpu: 50.070716578149295 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 53.105223888504796,
            "unit": "ns/iter",
            "extra": "iterations: 13290119\ncpu: 53.10157388357286 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 66.69404655731819,
            "unit": "ns/iter",
            "extra": "iterations: 12150012\ncpu: 66.67157250544204 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 72.48342401409464,
            "unit": "ns/iter",
            "extra": "iterations: 10128206\ncpu: 72.4793379005136 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 82.7488884254937,
            "unit": "ns/iter",
            "extra": "iterations: 8124512\ncpu: 82.74828937417446 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 99.71359776710817,
            "unit": "ns/iter",
            "extra": "iterations: 6949869\ncpu: 99.70626626199046 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 109.0007048029384,
            "unit": "ns/iter",
            "extra": "iterations: 6362062\ncpu: 108.97694033789762 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 131.01844916518579,
            "unit": "ns/iter",
            "extra": "iterations: 6139790\ncpu: 131.002992773368 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 55.456556710667236,
            "unit": "ns/iter",
            "extra": "iterations: 13102576\ncpu: 55.44891401507728 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 61.05228577201095,
            "unit": "ns/iter",
            "extra": "iterations: 12077167\ncpu: 61.04620686291705 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 71.86331899494408,
            "unit": "ns/iter",
            "extra": "iterations: 10205939\ncpu: 71.862723459349 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 77.46597318893122,
            "unit": "ns/iter",
            "extra": "iterations: 9095798\ncpu: 77.46154499033722 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 86.73908095309544,
            "unit": "ns/iter",
            "extra": "iterations: 8348279\ncpu: 86.55137256433251 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 93.43061930892631,
            "unit": "ns/iter",
            "extra": "iterations: 7152343\ncpu: 93.41620529104677 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 102.65663397191474,
            "unit": "ns/iter",
            "extra": "iterations: 6335586\ncpu: 102.64927537879181 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 112.64578027381337,
            "unit": "ns/iter",
            "extra": "iterations: 5617900\ncpu: 112.6383057726166 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 140.89223866212123,
            "unit": "ns/iter",
            "extra": "iterations: 5360197\ncpu: 140.87555793192308 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 97.7493254684222,
            "unit": "ns/iter",
            "extra": "iterations: 7077504\ncpu: 97.73310619110491 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 174.02624466786762,
            "unit": "ns/iter",
            "extra": "iterations: 4229964\ncpu: 174.00602511037638 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 350.10425397271996,
            "unit": "ns/iter",
            "extra": "iterations: 2008499\ncpu: 350.032433175207 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 699.7168942890095,
            "unit": "ns/iter",
            "extra": "iterations: 1035486\ncpu: 699.6140923199358 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1489.124458559502,
            "unit": "ns/iter",
            "extra": "iterations: 446494\ncpu: 1488.8844284581548 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 3317.9843287148537,
            "unit": "ns/iter",
            "extra": "iterations: 202217\ncpu: 3317.7416587134035 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 8354.012632472715,
            "unit": "ns/iter",
            "extra": "iterations: 84544\ncpu: 8352.36698050744 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 22481.12340909044,
            "unit": "ns/iter",
            "extra": "iterations: 33393\ncpu: 22479.851136465422 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 60613.73239999739,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 60609.91560000275 ns\nthreads: undefined"
          }
        ]
      },
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
          "id": "3d8a7a0108351bd64b4ce4f7f803a329c34ee3c7",
          "message": "Add plotting JointTrajectory to Visualization\n\nA Joint Trajectory currently contains joint names and a TrajArray, but that will likely change soon.",
          "timestamp": "2020-06-25T15:10:06-05:00",
          "tree_id": "c51f149f77a61d0d8696d76da8c60f2db68a88d2",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/3d8a7a0108351bd64b4ce4f7f803a329c34ee3c7"
        },
        "date": 1593186140833,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 66.22724951443463,
            "unit": "us/iter",
            "extra": "iterations: 9783\ncpu: 66.20372421547583 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 69.21567531163734,
            "unit": "us/iter",
            "extra": "iterations: 9948\ncpu: 69.19036077603536 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 68.14704363633392,
            "unit": "us/iter",
            "extra": "iterations: 10175\ncpu: 68.12261012285009 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 72.55504680848102,
            "unit": "us/iter",
            "extra": "iterations: 9870\ncpu: 72.39916190476194 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 78.09286109233517,
            "unit": "us/iter",
            "extra": "iterations: 8898\ncpu: 78.06179366149702 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 98.16301182939603,
            "unit": "us/iter",
            "extra": "iterations: 7270\ncpu: 98.15387414030262 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 140.49498031728277,
            "unit": "us/iter",
            "extra": "iterations: 4979\ncpu: 140.4748096003213 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 248.47984776533724,
            "unit": "us/iter",
            "extra": "iterations: 2864\ncpu: 248.2275478351956 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 562.8036200745502,
            "unit": "us/iter",
            "extra": "iterations: 1345\ncpu: 562.7968319702597 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1627.2043814903593,
            "unit": "us/iter",
            "extra": "iterations: 443\ncpu: 1626.603589164786 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.47275808842512,
            "unit": "us/iter",
            "extra": "iterations: 158529\ncpu: 4.472194872862375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.715345240348548,
            "unit": "us/iter",
            "extra": "iterations: 105764\ncpu: 6.712253687455088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 42.69871973163215,
            "unit": "us/iter",
            "extra": "iterations: 16395\ncpu: 42.692170051845146 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 23.643101818189503,
            "unit": "us/iter",
            "extra": "iterations: 29700\ncpu: 23.637375420875397 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.995882266910363,
            "unit": "us/iter",
            "extra": "iterations: 142220\ncpu: 4.994904788356071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.840723041351778,
            "unit": "us/iter",
            "extra": "iterations: 104243\ncpu: 6.83899500206249 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.90608885962906,
            "unit": "us/iter",
            "extra": "iterations: 145049\ncpu: 4.9043196437066054 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 73.88858899259701,
            "unit": "us/iter",
            "extra": "iterations: 9321\ncpu: 73.85244877159094 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 75.68192837437319,
            "unit": "us/iter",
            "extra": "iterations: 9424\ncpu: 75.68103066638375 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.38180451644188,
            "unit": "us/iter",
            "extra": "iterations: 129571\ncpu: 5.379338262419832 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 43.33751313329849,
            "unit": "us/iter",
            "extra": "iterations: 16066\ncpu: 43.33657904892307 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 71.22507392678371,
            "unit": "us/iter",
            "extra": "iterations: 9807\ncpu: 71.19170337514025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5527204953231739,
            "unit": "us/iter",
            "extra": "iterations: 1288694\ncpu: 0.5525882451536218 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.5999667060274514,
            "unit": "us/iter",
            "extra": "iterations: 1194931\ncpu: 0.5998917945889739 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 12.522462433761413,
            "unit": "us/iter",
            "extra": "iterations: 53785\ncpu: 12.519420061355397 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 26.20560252108605,
            "unit": "us/iter",
            "extra": "iterations: 26814\ncpu: 26.20501309017689 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 74.50222117595457,
            "unit": "us/iter",
            "extra": "iterations: 9133\ncpu: 74.46516456804996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.6033183223009944,
            "unit": "us/iter",
            "extra": "iterations: 1188437\ncpu: 0.6033104522999515 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.6006179135195997,
            "unit": "us/iter",
            "extra": "iterations: 1178741\ncpu: 0.6004779302662755 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 77.39879740998792,
            "unit": "us/iter",
            "extra": "iterations: 9112\ncpu: 77.38419929762934 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.505316244529813,
            "unit": "us/iter",
            "extra": "iterations: 127803\ncpu: 5.505249712448055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.4023240021039465,
            "unit": "us/iter",
            "extra": "iterations: 129172\ncpu: 5.399809788499055 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 13.013568884621645,
            "unit": "us/iter",
            "extra": "iterations: 54134\ncpu: 13.013457919237483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 76.66574975646195,
            "unit": "us/iter",
            "extra": "iterations: 9239\ncpu: 76.65060807446672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.396182441485406,
            "unit": "us/iter",
            "extra": "iterations: 157519\ncpu: 4.396204076968492 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.287342541053021,
            "unit": "us/iter",
            "extra": "iterations: 158635\ncpu: 4.2849180193526335 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.565446733601493,
            "unit": "us/iter",
            "extra": "iterations: 103386\ncpu: 6.564853210299261 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 43.43337645824859,
            "unit": "us/iter",
            "extra": "iterations: 16201\ncpu: 43.417582988704176 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 23.59985094497512,
            "unit": "us/iter",
            "extra": "iterations: 29895\ncpu: 23.599986419133526 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.906660287080269,
            "unit": "us/iter",
            "extra": "iterations: 137313\ncpu: 4.9058115983191835 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.586083598340301,
            "unit": "us/iter",
            "extra": "iterations: 104715\ncpu: 6.584543112257037 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.748431601462068,
            "unit": "us/iter",
            "extra": "iterations: 145873\ncpu: 4.74778054883359 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 73.32963398693565,
            "unit": "us/iter",
            "extra": "iterations: 9180\ncpu: 73.31171013071912 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 74.12991884441692,
            "unit": "us/iter",
            "extra": "iterations: 9069\ncpu: 74.12881144558382 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.497126313793403,
            "unit": "us/iter",
            "extra": "iterations: 126637\ncpu: 5.494850249137312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 43.41616321368984,
            "unit": "us/iter",
            "extra": "iterations: 16218\ncpu: 43.414583117523904 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 73.71641048126136,
            "unit": "us/iter",
            "extra": "iterations: 9808\ncpu: 73.67958890701419 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5126502636177145,
            "unit": "us/iter",
            "extra": "iterations: 1374338\ncpu: 0.5125918362149646 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5554490501622773,
            "unit": "us/iter",
            "extra": "iterations: 1277639\ncpu: 0.5554369551962656 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 12.46608948016581,
            "unit": "us/iter",
            "extra": "iterations: 53632\ncpu: 12.461822922881861 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 26.229880232967858,
            "unit": "us/iter",
            "extra": "iterations: 25583\ncpu: 26.22730614079663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 75.3950030150825,
            "unit": "us/iter",
            "extra": "iterations: 8955\ncpu: 75.36859754327189 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5564654635508004,
            "unit": "us/iter",
            "extra": "iterations: 1271975\ncpu: 0.5564532093791159 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5501331092017336,
            "unit": "us/iter",
            "extra": "iterations: 1295072\ncpu: 0.5501256061439027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 76.99566409268846,
            "unit": "us/iter",
            "extra": "iterations: 9065\ncpu: 76.97275741864281 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.46647222634906,
            "unit": "us/iter",
            "extra": "iterations: 127873\ncpu: 5.466390770530098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.4411718464636305,
            "unit": "us/iter",
            "extra": "iterations: 129767\ncpu: 5.393094453905818 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 12.929056863449036,
            "unit": "us/iter",
            "extra": "iterations: 52969\ncpu: 12.927423511865504 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 77.0062135184787,
            "unit": "us/iter",
            "extra": "iterations: 9217\ncpu: 76.99749267657621 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.368423669255679,
            "unit": "us/iter",
            "extra": "iterations: 155383\ncpu: 4.367707709337538 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.558104845936901,
            "unit": "us/iter",
            "extra": "iterations: 158442\ncpu: 4.560599979803349 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.756897192820975,
            "unit": "us/iter",
            "extra": "iterations: 100421\ncpu: 6.755982951773045 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 43.37486566981932,
            "unit": "us/iter",
            "extra": "iterations: 16318\ncpu: 43.36471534501754 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 23.4913255766957,
            "unit": "us/iter",
            "extra": "iterations: 29652\ncpu: 23.39392799811137 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.9190379649284885,
            "unit": "us/iter",
            "extra": "iterations: 142737\ncpu: 4.917294856974736 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.876718255245277,
            "unit": "us/iter",
            "extra": "iterations: 102639\ncpu: 6.876637028809734 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.938093778672781,
            "unit": "us/iter",
            "extra": "iterations: 140597\ncpu: 4.936098664978632 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 73.00740970569153,
            "unit": "us/iter",
            "extra": "iterations: 8799\ncpu: 73.0012451414932 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 74.17944677728843,
            "unit": "us/iter",
            "extra": "iterations: 9526\ncpu: 74.17049643082088 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.463851512679367,
            "unit": "us/iter",
            "extra": "iterations: 117606\ncpu: 5.461747878509599 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 42.911164911842725,
            "unit": "us/iter",
            "extra": "iterations: 16336\ncpu: 42.910514997551665 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 71.75004826533448,
            "unit": "us/iter",
            "extra": "iterations: 9800\ncpu: 71.71651091836802 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5613652123265647,
            "unit": "us/iter",
            "extra": "iterations: 1265316\ncpu: 0.5613603210581473 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5995425080709271,
            "unit": "us/iter",
            "extra": "iterations: 1182646\ncpu: 0.5993970883933167 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 12.491128765098992,
            "unit": "us/iter",
            "extra": "iterations: 55543\ncpu: 12.489019138325135 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 25.849328829668092,
            "unit": "us/iter",
            "extra": "iterations: 26941\ncpu: 25.848973571879142 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 73.60173017890176,
            "unit": "us/iter",
            "extra": "iterations: 9447\ncpu: 73.5806417910456 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.6149253871270083,
            "unit": "us/iter",
            "extra": "iterations: 1206387\ncpu: 0.6149188345033562 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.5906464254804941,
            "unit": "us/iter",
            "extra": "iterations: 1186607\ncpu: 0.5904746769570748 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 75.51278956267979,
            "unit": "us/iter",
            "extra": "iterations: 8278\ncpu: 75.50290118386046 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.441965342589374,
            "unit": "us/iter",
            "extra": "iterations: 129323\ncpu: 5.441909637110175 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.339866688521653,
            "unit": "us/iter",
            "extra": "iterations: 134227\ncpu: 5.337677471745612 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 12.842530380052189,
            "unit": "us/iter",
            "extra": "iterations: 53703\ncpu: 12.84238599333379 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 76.7113710201245,
            "unit": "us/iter",
            "extra": "iterations: 9234\ncpu: 76.53589018843412 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.390141467511004,
            "unit": "us/iter",
            "extra": "iterations: 159549\ncpu: 4.390204376085052 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.399768137291744,
            "unit": "us/iter",
            "extra": "iterations: 160884\ncpu: 4.397658393625213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.594553043897087,
            "unit": "us/iter",
            "extra": "iterations: 107543\ncpu: 6.594501036794563 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 42.4434312681579,
            "unit": "us/iter",
            "extra": "iterations: 16528\ncpu: 42.42604083978724 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 23.07903934861457,
            "unit": "us/iter",
            "extra": "iterations: 30090\ncpu: 23.079160784314 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 5.040823936010948,
            "unit": "us/iter",
            "extra": "iterations: 144527\ncpu: 5.0391120690252125 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.6104055929064565,
            "unit": "us/iter",
            "extra": "iterations: 107100\ncpu: 6.610274864612518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.818923104231796,
            "unit": "us/iter",
            "extra": "iterations: 143662\ncpu: 4.817011053723308 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 72.53076129987917,
            "unit": "us/iter",
            "extra": "iterations: 9447\ncpu: 72.52931459722626 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 73.7339396423126,
            "unit": "us/iter",
            "extra": "iterations: 9394\ncpu: 73.71597200340663 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.436433066551499,
            "unit": "us/iter",
            "extra": "iterations: 127694\ncpu: 5.435362585556161 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 43.900449084848745,
            "unit": "us/iter",
            "extra": "iterations: 15899\ncpu: 43.88938750864813 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 70.55874210687695,
            "unit": "us/iter",
            "extra": "iterations: 9787\ncpu: 70.55067753141893 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5352033981405125,
            "unit": "us/iter",
            "extra": "iterations: 1289058\ncpu: 0.535190909951306 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.6005099530347928,
            "unit": "us/iter",
            "extra": "iterations: 1195565\ncpu: 0.6001967538360439 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 12.346176265632902,
            "unit": "us/iter",
            "extra": "iterations: 57402\ncpu: 12.346093428800316 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 26.46067109658466,
            "unit": "us/iter",
            "extra": "iterations: 27239\ncpu: 26.449340834832228 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 74.40911743138021,
            "unit": "us/iter",
            "extra": "iterations: 9001\ncpu: 74.39567614709479 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.588614741165735,
            "unit": "us/iter",
            "extra": "iterations: 1159854\ncpu: 0.5885294752615438 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5835865397824862,
            "unit": "us/iter",
            "extra": "iterations: 1186177\ncpu: 0.5832689480575033 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 76.5291018880454,
            "unit": "us/iter",
            "extra": "iterations: 9216\ncpu: 76.52348795572946 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.516180240748424,
            "unit": "us/iter",
            "extra": "iterations: 127768\ncpu: 5.51532620844033 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.3695190430722795,
            "unit": "us/iter",
            "extra": "iterations: 130835\ncpu: 5.3685680895785355 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 13.22323605775023,
            "unit": "us/iter",
            "extra": "iterations: 54923\ncpu: 13.223076634561128 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 76.41464298189098,
            "unit": "us/iter",
            "extra": "iterations: 9162\ncpu: 76.38779447718882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.468890290013352,
            "unit": "us/iter",
            "extra": "iterations: 159475\ncpu: 4.4688442326382996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.58698451568166,
            "unit": "us/iter",
            "extra": "iterations: 147052\ncpu: 4.586292488371545 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.699906013199835,
            "unit": "us/iter",
            "extra": "iterations: 91981\ncpu: 7.699794794577198 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.4530206891205626,
            "unit": "us/iter",
            "extra": "iterations: 489726\ncpu: 1.4524566247248305 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.6557030859272612,
            "unit": "us/iter",
            "extra": "iterations: 424281\ncpu: 1.6556805041941336 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.254858465857499,
            "unit": "us/iter",
            "extra": "iterations: 95454\ncpu: 7.252504892408874 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 8.351418438309615,
            "unit": "us/iter",
            "extra": "iterations: 85561\ncpu: 8.350469103914213 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 44.893931610922685,
            "unit": "us/iter",
            "extra": "iterations: 15792\ncpu: 44.88351975683884 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.262406540435884,
            "unit": "us/iter",
            "extra": "iterations: 161610\ncpu: 4.2623418105315105 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 21.115730311405503,
            "unit": "us/iter",
            "extra": "iterations: 33268\ncpu: 21.109229890585762 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 23.503118936272582,
            "unit": "us/iter",
            "extra": "iterations: 29293\ncpu: 23.50258365479763 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.5239071340527681,
            "unit": "us/iter",
            "extra": "iterations: 467308\ncpu: 1.52357010793739 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.9311075432653713,
            "unit": "us/iter",
            "extra": "iterations: 177854\ncpu: 3.931063034848827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7669427500583322,
            "unit": "us/iter",
            "extra": "iterations: 914097\ncpu: 0.7668564353673568 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8232342958499482,
            "unit": "us/iter",
            "extra": "iterations: 864851\ncpu: 0.8229493022497415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 26.46778530614804,
            "unit": "us/iter",
            "extra": "iterations: 27127\ncpu: 26.467358425185232 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.802623240997903,
            "unit": "us/iter",
            "extra": "iterations: 392410\ncpu: 1.8021775770240351 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 20.691187028978334,
            "unit": "us/iter",
            "extra": "iterations: 33968\ncpu: 20.690765455722726 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8195371517026713,
            "unit": "us/iter",
            "extra": "iterations: 830110\ncpu: 0.8192923359554765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8086787769902621,
            "unit": "us/iter",
            "extra": "iterations: 842119\ncpu: 0.8086226590303716 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 26.453352079843565,
            "unit": "us/iter",
            "extra": "iterations: 26156\ncpu: 26.545171394708614 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 8.287309523527219,
            "unit": "us/iter",
            "extra": "iterations: 85273\ncpu: 8.286750202291465 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 23.253698850430887,
            "unit": "us/iter",
            "extra": "iterations: 30533\ncpu: 23.25143785412496 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 29.403549190097298,
            "unit": "us/iter",
            "extra": "iterations: 23460\ncpu: 29.40012519181599 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 27.517794833367052,
            "unit": "us/iter",
            "extra": "iterations: 25355\ncpu: 27.51169481364595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.490651213182687,
            "unit": "us/iter",
            "extra": "iterations: 128299\ncpu: 5.489226369652138 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.5840033691115245,
            "unit": "us/iter",
            "extra": "iterations: 154937\ncpu: 4.582532042055826 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.720977431495023,
            "unit": "us/iter",
            "extra": "iterations: 90613\ncpu: 7.719166753114752 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.39892762870166,
            "unit": "us/iter",
            "extra": "iterations: 498402\ncpu: 1.3988449645065548 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.6138549701403246,
            "unit": "us/iter",
            "extra": "iterations: 424485\ncpu: 1.613174741156937 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.173374909862224,
            "unit": "us/iter",
            "extra": "iterations: 98461\ncpu: 7.173169904835461 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 8.084692689261816,
            "unit": "us/iter",
            "extra": "iterations: 85477\ncpu: 8.083410788867187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 43.795248053159845,
            "unit": "us/iter",
            "extra": "iterations: 15795\ncpu: 43.795463944285636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.333950994254639,
            "unit": "us/iter",
            "extra": "iterations: 166205\ncpu: 4.33232354020636 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 20.566619815182708,
            "unit": "us/iter",
            "extra": "iterations: 33873\ncpu: 20.56622244855801 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.21834996004379,
            "unit": "us/iter",
            "extra": "iterations: 30032\ncpu: 23.212598461640695 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.5125875562118314,
            "unit": "us/iter",
            "extra": "iterations: 461869\ncpu: 1.5125959070645534 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.8896863364041523,
            "unit": "us/iter",
            "extra": "iterations: 177091\ncpu: 3.888648259934283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.771853697797216,
            "unit": "us/iter",
            "extra": "iterations: 934962\ncpu: 0.7718456001420344 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7795031270985109,
            "unit": "us/iter",
            "extra": "iterations: 902434\ncpu: 0.7793820866678104 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 25.719173299956637,
            "unit": "us/iter",
            "extra": "iterations: 27161\ncpu: 25.716068370089122 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.7307682431553064,
            "unit": "us/iter",
            "extra": "iterations: 408989\ncpu: 1.7307476778104198 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.475023339167077,
            "unit": "us/iter",
            "extra": "iterations: 34320\ncpu: 20.46955926573446 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.801191592750607,
            "unit": "us/iter",
            "extra": "iterations: 873175\ncpu: 0.8011811687233421 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.79818804911306,
            "unit": "us/iter",
            "extra": "iterations: 876186\ncpu: 0.7979691184291837 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 26.289644224776417,
            "unit": "us/iter",
            "extra": "iterations: 25696\ncpu: 26.289126906911655 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.026723572049116,
            "unit": "us/iter",
            "extra": "iterations: 86225\ncpu: 8.025362412293514 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 22.98944262726238,
            "unit": "us/iter",
            "extra": "iterations: 30389\ncpu: 22.986700812794542 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 28.736678587800515,
            "unit": "us/iter",
            "extra": "iterations: 23991\ncpu: 28.730587595347348 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 27.61068185740392,
            "unit": "us/iter",
            "extra": "iterations: 25498\ncpu: 27.6078164954116 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.457001382607738,
            "unit": "us/iter",
            "extra": "iterations: 131635\ncpu: 5.456891639761472 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.571524958467203,
            "unit": "us/iter",
            "extra": "iterations: 152894\ncpu: 4.570936079898552 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.680496020640981,
            "unit": "us/iter",
            "extra": "iterations: 91849\ncpu: 7.680328245272048 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.4226044913482832,
            "unit": "us/iter",
            "extra": "iterations: 488940\ncpu: 1.4221623593896813 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.6087309055660115,
            "unit": "us/iter",
            "extra": "iterations: 430217\ncpu: 1.6086971365613123 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.141850427655952,
            "unit": "us/iter",
            "extra": "iterations: 98327\ncpu: 7.139992809706381 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.083395995386974,
            "unit": "us/iter",
            "extra": "iterations: 86650\ncpu: 8.083286543566002 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 45.019245709623235,
            "unit": "us/iter",
            "extra": "iterations: 15966\ncpu: 44.892620255543505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.309375199337523,
            "unit": "us/iter",
            "extra": "iterations: 161157\ncpu: 4.309288445428887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 20.805392354302978,
            "unit": "us/iter",
            "extra": "iterations: 33169\ncpu: 20.79557137688831 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 23.777328207375824,
            "unit": "us/iter",
            "extra": "iterations: 29588\ncpu: 23.775330370420576 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5337036211118642,
            "unit": "us/iter",
            "extra": "iterations: 459196\ncpu: 1.5334164017108 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 4.002358676885177,
            "unit": "us/iter",
            "extra": "iterations: 177218\ncpu: 4.002029348034555 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7651516470832485,
            "unit": "us/iter",
            "extra": "iterations: 902899\ncpu: 0.7650168490606418 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.81387219651621,
            "unit": "us/iter",
            "extra": "iterations: 879397\ncpu: 0.8137818334608761 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 25.79087019852545,
            "unit": "us/iter",
            "extra": "iterations: 27049\ncpu: 25.786714924766486 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.8179546166630938,
            "unit": "us/iter",
            "extra": "iterations: 397679\ncpu: 1.817564354667996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 20.712141426671145,
            "unit": "us/iter",
            "extra": "iterations: 33855\ncpu: 20.711662413232453 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8129272959081959,
            "unit": "us/iter",
            "extra": "iterations: 768650\ncpu: 0.8126619254537084 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8131585055379243,
            "unit": "us/iter",
            "extra": "iterations: 804035\ncpu: 0.813084069723356 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.734250760803096,
            "unit": "us/iter",
            "extra": "iterations: 26288\ncpu: 26.723803180158704 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 8.41311223205603,
            "unit": "us/iter",
            "extra": "iterations: 85840\ncpu: 8.412249976701041 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 23.2387888566847,
            "unit": "us/iter",
            "extra": "iterations: 30368\ncpu: 23.236709760274856 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 29.40797479096113,
            "unit": "us/iter",
            "extra": "iterations: 24396\ncpu: 29.404829480243382 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 27.83794299371292,
            "unit": "us/iter",
            "extra": "iterations: 25313\ncpu: 27.82996175877967 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.574427385082343,
            "unit": "us/iter",
            "extra": "iterations: 128486\ncpu: 5.573148195134071 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.537420391403,
            "unit": "us/iter",
            "extra": "iterations: 156566\ncpu: 4.536927704610257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.828235702374526,
            "unit": "us/iter",
            "extra": "iterations: 89333\ncpu: 7.826699215295709 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.428850230495338,
            "unit": "us/iter",
            "extra": "iterations: 486561\ncpu: 1.4288015685597741 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.6553934896487223,
            "unit": "us/iter",
            "extra": "iterations: 419025\ncpu: 1.6548708883718222 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 7.354347474475575,
            "unit": "us/iter",
            "extra": "iterations: 96079\ncpu: 7.35424938852416 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.183107838515722,
            "unit": "us/iter",
            "extra": "iterations: 84914\ncpu: 8.182615081140996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 45.03601570913883,
            "unit": "us/iter",
            "extra": "iterations: 15787\ncpu: 45.03546975359505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.372743144435723,
            "unit": "us/iter",
            "extra": "iterations: 160016\ncpu: 4.371462653734549 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 21.148042159685257,
            "unit": "us/iter",
            "extra": "iterations: 31523\ncpu: 21.147705231100606 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 23.90594538242602,
            "unit": "us/iter",
            "extra": "iterations: 29496\ncpu: 23.899777257933582 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.5572537361435639,
            "unit": "us/iter",
            "extra": "iterations: 450799\ncpu: 1.5572320258030725 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.988656163660498,
            "unit": "us/iter",
            "extra": "iterations: 178076\ncpu: 3.9872126507784045 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7834824870083071,
            "unit": "us/iter",
            "extra": "iterations: 910781\ncpu: 0.7834751833865683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8111496489263544,
            "unit": "us/iter",
            "extra": "iterations: 872609\ncpu: 0.8110240279437816 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 26.097098434001694,
            "unit": "us/iter",
            "extra": "iterations: 26820\ncpu: 26.094053803132027 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.7515471046350188,
            "unit": "us/iter",
            "extra": "iterations: 400364\ncpu: 1.7513569751526186 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 21.123906120904085,
            "unit": "us/iter",
            "extra": "iterations: 34374\ncpu: 21.12019471111812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8125870205125252,
            "unit": "us/iter",
            "extra": "iterations: 865951\ncpu: 0.8125765788133462 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8176039005959369,
            "unit": "us/iter",
            "extra": "iterations: 864432\ncpu: 0.8173973267995521 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 26.88198941068105,
            "unit": "us/iter",
            "extra": "iterations: 26064\ncpu: 26.881627493860826 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 8.141655306767978,
            "unit": "us/iter",
            "extra": "iterations: 85212\ncpu: 8.139742806177727 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 23.295426548730024,
            "unit": "us/iter",
            "extra": "iterations: 29734\ncpu: 23.29533742516972 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 29.25674598898394,
            "unit": "us/iter",
            "extra": "iterations: 24495\ncpu: 29.252593100632108 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 27.981834772829384,
            "unit": "us/iter",
            "extra": "iterations: 24893\ncpu: 27.981545735748607 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.479439738635691,
            "unit": "us/iter",
            "extra": "iterations: 129934\ncpu: 5.478440415903539 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.2221005234590818,
            "unit": "us/iter",
            "extra": "iterations: 3249729\ncpu: 0.22207905120703525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.103084271682424,
            "unit": "us/iter",
            "extra": "iterations: 222554\ncpu: 3.1028920531646182 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2526631180049377,
            "unit": "us/iter",
            "extra": "iterations: 538325\ncpu: 1.2524055932754747 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3944889105410936,
            "unit": "us/iter",
            "extra": "iterations: 484424\ncpu: 1.39447461727742 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.355772277715149,
            "unit": "us/iter",
            "extra": "iterations: 304340\ncpu: 2.3550900276007103 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.777224927655487,
            "unit": "us/iter",
            "extra": "iterations: 185224\ncpu: 3.7771942620826016 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.696390581485031,
            "unit": "us/iter",
            "extra": "iterations: 191028\ncpu: 3.695427560357677 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.63477576144287,
            "unit": "us/iter",
            "extra": "iterations: 267978\ncpu: 2.634574554627561 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.447107442026188,
            "unit": "us/iter",
            "extra": "iterations: 158653\ncpu: 4.39901368395187 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.7809035765640555,
            "unit": "us/iter",
            "extra": "iterations: 126546\ncpu: 5.780467173991888 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.317801741118474,
            "unit": "us/iter",
            "extra": "iterations: 534599\ncpu: 1.3174712840839484 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.235940015917653,
            "unit": "us/iter",
            "extra": "iterations: 316634\ncpu: 2.235922686761382 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7873844087377673,
            "unit": "us/iter",
            "extra": "iterations: 910510\ncpu: 0.7870397249892742 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.817047510149616,
            "unit": "us/iter",
            "extra": "iterations: 866257\ncpu: 0.8170377266792666 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.3373340632169395,
            "unit": "us/iter",
            "extra": "iterations: 208709\ncpu: 3.336242989042158 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.5260116178094896,
            "unit": "us/iter",
            "extra": "iterations: 453700\ncpu: 1.525890916905391 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.8965393403556003,
            "unit": "us/iter",
            "extra": "iterations: 179612\ncpu: 3.8761524230006814 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8344041571942901,
            "unit": "us/iter",
            "extra": "iterations: 859955\ncpu: 0.8342636707734822 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8085519240684186,
            "unit": "us/iter",
            "extra": "iterations: 857194\ncpu: 0.8085569054379689 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.169688693332543,
            "unit": "us/iter",
            "extra": "iterations: 320112\ncpu: 2.1691546240066337 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.9845917290754882,
            "unit": "us/iter",
            "extra": "iterations: 347845\ncpu: 1.9845603444062199 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.271248788803282,
            "unit": "us/iter",
            "extra": "iterations: 133752\ncpu: 5.25577113613246 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.398003449059666,
            "unit": "us/iter",
            "extra": "iterations: 206723\ncpu: 3.3979335777828426 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.1539626399126575,
            "unit": "us/iter",
            "extra": "iterations: 318950\ncpu: 2.153151136541722 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.7922156935181843,
            "unit": "us/iter",
            "extra": "iterations: 254449\ncpu: 2.7920368089479246 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.20953316080852546,
            "unit": "us/iter",
            "extra": "iterations: 3348697\ncpu: 0.2094481540133413 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.183908058500585,
            "unit": "us/iter",
            "extra": "iterations: 223925\ncpu: 3.183877333928764 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2130717956228196,
            "unit": "us/iter",
            "extra": "iterations: 566678\ncpu: 1.2127931382548496 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3854783789503917,
            "unit": "us/iter",
            "extra": "iterations: 509966\ncpu: 1.3853683500468537 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.3321637356284577,
            "unit": "us/iter",
            "extra": "iterations: 298927\ncpu: 2.331588521612288 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.813706509388254,
            "unit": "us/iter",
            "extra": "iterations: 186592\ncpu: 3.813682419396262 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.5834565215176832,
            "unit": "us/iter",
            "extra": "iterations: 195522\ncpu: 3.5811277298717656 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.5814279526780033,
            "unit": "us/iter",
            "extra": "iterations: 269899\ncpu: 2.581237233187193 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.34611036022053,
            "unit": "us/iter",
            "extra": "iterations: 162178\ncpu: 4.344116649607268 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.657672963464216,
            "unit": "us/iter",
            "extra": "iterations: 127631\ncpu: 5.657573050434546 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.2956968882524245,
            "unit": "us/iter",
            "extra": "iterations: 535037\ncpu: 1.2955281279612403 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.199585780599853,
            "unit": "us/iter",
            "extra": "iterations: 314092\ncpu: 2.199255613005168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7411122248593907,
            "unit": "us/iter",
            "extra": "iterations: 942563\ncpu: 0.7410236111538535 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.8009367518369295,
            "unit": "us/iter",
            "extra": "iterations: 911315\ncpu: 0.8004975085453317 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.3570613751871976,
            "unit": "us/iter",
            "extra": "iterations: 216814\ncpu: 3.35700944588444 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.4790891911948718,
            "unit": "us/iter",
            "extra": "iterations: 477222\ncpu: 1.4786326300966923 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.9639774963149383,
            "unit": "us/iter",
            "extra": "iterations: 183881\ncpu: 3.963842338251455 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7899211097389084,
            "unit": "us/iter",
            "extra": "iterations: 893976\ncpu: 0.7897289009995883 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7977859763174727,
            "unit": "us/iter",
            "extra": "iterations: 842318\ncpu: 0.7977257140415079 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.1567317386328715,
            "unit": "us/iter",
            "extra": "iterations: 317761\ncpu: 2.156305393046908 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.9964273071061047,
            "unit": "us/iter",
            "extra": "iterations: 355922\ncpu: 1.996390908682243 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.224391246251326,
            "unit": "us/iter",
            "extra": "iterations: 134708\ncpu: 5.223423100335443 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.421519688115392,
            "unit": "us/iter",
            "extra": "iterations: 207384\ncpu: 3.4211271747096776 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.1996951745998348,
            "unit": "us/iter",
            "extra": "iterations: 311083\ncpu: 2.1995644345721828 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.7738608425227085,
            "unit": "us/iter",
            "extra": "iterations: 253691\ncpu: 2.773183029748857 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.21534565080487977,
            "unit": "us/iter",
            "extra": "iterations: 3266363\ncpu: 0.21533158408909797 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.1076521584159553,
            "unit": "us/iter",
            "extra": "iterations: 224447\ncpu: 3.107334386291641 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.3108742538504128,
            "unit": "us/iter",
            "extra": "iterations: 539269\ncpu: 1.3107729277967368 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.4126420338436732,
            "unit": "us/iter",
            "extra": "iterations: 496695\ncpu: 1.4122363341688364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.346731864831014,
            "unit": "us/iter",
            "extra": "iterations: 302258\ncpu: 2.3466010229671936 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.724830940370892,
            "unit": "us/iter",
            "extra": "iterations: 186171\ncpu: 3.7239142025342273 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.665369710409799,
            "unit": "us/iter",
            "extra": "iterations: 192997\ncpu: 3.665394394731518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.5908104660518347,
            "unit": "us/iter",
            "extra": "iterations: 271086\ncpu: 2.5901972473679606 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.311787690722142,
            "unit": "us/iter",
            "extra": "iterations: 159197\ncpu: 4.311307285941357 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.661510783662793,
            "unit": "us/iter",
            "extra": "iterations: 127925\ncpu: 5.660157115497381 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3767117382005003,
            "unit": "us/iter",
            "extra": "iterations: 517984\ncpu: 1.3767021587539376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.23345817610892,
            "unit": "us/iter",
            "extra": "iterations: 314043\ncpu: 2.232235888078994 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7884524294590253,
            "unit": "us/iter",
            "extra": "iterations: 884518\ncpu: 0.7884454052941882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8168980644997852,
            "unit": "us/iter",
            "extra": "iterations: 861741\ncpu: 0.8167989685996264 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.3044873000269286,
            "unit": "us/iter",
            "extra": "iterations: 209528\ncpu: 3.3044521161848848 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.5250504709225325,
            "unit": "us/iter",
            "extra": "iterations: 461434\ncpu: 1.5248395458505426 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.86875656307387,
            "unit": "us/iter",
            "extra": "iterations: 179032\ncpu: 3.8687085213816235 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8309013743487096,
            "unit": "us/iter",
            "extra": "iterations: 837997\ncpu: 0.8307169524473181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8421232892137049,
            "unit": "us/iter",
            "extra": "iterations: 807962\ncpu: 0.8419110762634952 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.1895997950456474,
            "unit": "us/iter",
            "extra": "iterations: 324951\ncpu: 2.1894506156312 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.992381989262047,
            "unit": "us/iter",
            "extra": "iterations: 359641\ncpu: 1.991635444790788 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.170337793703137,
            "unit": "us/iter",
            "extra": "iterations: 135639\ncpu: 5.170269649584712 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.3850883139909107,
            "unit": "us/iter",
            "extra": "iterations: 207419\ncpu: 3.3837440398419973 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.1593559205082555,
            "unit": "us/iter",
            "extra": "iterations: 326070\ncpu: 2.159345824516154 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.86184429791092,
            "unit": "us/iter",
            "extra": "iterations: 248558\ncpu: 2.8606196260029666 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.21894981552330336,
            "unit": "us/iter",
            "extra": "iterations: 3250547\ncpu: 0.21894610322508723 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.1710398678059346,
            "unit": "us/iter",
            "extra": "iterations: 224216\ncpu: 3.169738858957441 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2534858275272829,
            "unit": "us/iter",
            "extra": "iterations: 565921\ncpu: 1.2534685371280374 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.3908898621302013,
            "unit": "us/iter",
            "extra": "iterations: 486690\ncpu: 1.3907124863876685 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.286580650413323,
            "unit": "us/iter",
            "extra": "iterations: 294828\ncpu: 2.2863985679787078 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.701958401961683,
            "unit": "us/iter",
            "extra": "iterations: 185778\ncpu: 3.701133465749401 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.561706390815317,
            "unit": "us/iter",
            "extra": "iterations: 191697\ncpu: 3.5616456282571596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.625062680859493,
            "unit": "us/iter",
            "extra": "iterations: 273002\ncpu: 2.624587955399511 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.294787612971802,
            "unit": "us/iter",
            "extra": "iterations: 161766\ncpu: 4.294685292335965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.540479253568667,
            "unit": "us/iter",
            "extra": "iterations: 126576\ncpu: 5.525165773922064 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.3155670732976432,
            "unit": "us/iter",
            "extra": "iterations: 528981\ncpu: 1.315298857614949 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.2361466818280706,
            "unit": "us/iter",
            "extra": "iterations: 309568\ncpu: 2.235711423661484 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7601171066118098,
            "unit": "us/iter",
            "extra": "iterations: 926139\ncpu: 0.75994669806585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.793059123364853,
            "unit": "us/iter",
            "extra": "iterations: 895196\ncpu: 0.7930534564497562 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.3444162377572706,
            "unit": "us/iter",
            "extra": "iterations: 214303\ncpu: 3.3435054618925326 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.5162707297716753,
            "unit": "us/iter",
            "extra": "iterations: 467311\ncpu: 1.5162378737072746 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.8730986213703926,
            "unit": "us/iter",
            "extra": "iterations: 184676\ncpu: 3.871700150533929 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8129899123948834,
            "unit": "us/iter",
            "extra": "iterations: 878603\ncpu: 0.8129768587177382 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8246909686099804,
            "unit": "us/iter",
            "extra": "iterations: 864197\ncpu: 0.8244732427907009 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.1875861521805358,
            "unit": "us/iter",
            "extra": "iterations: 299975\ncpu: 2.1875577998165707 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.9645294167793215,
            "unit": "us/iter",
            "extra": "iterations: 351891\ncpu: 1.964046849734637 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.2164281793159155,
            "unit": "us/iter",
            "extra": "iterations: 133708\ncpu: 5.215228894306777 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.408044763595511,
            "unit": "us/iter",
            "extra": "iterations: 204988\ncpu: 3.4080609401524864 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.2079321841506556,
            "unit": "us/iter",
            "extra": "iterations: 317153\ncpu: 2.207445324496513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.914425052759347,
            "unit": "us/iter",
            "extra": "iterations: 246400\ncpu: 2.914439833603832 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 13.078114521316635,
            "unit": "ns/iter",
            "extra": "iterations: 53901092\ncpu: 13.074998573311856 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 51.29427437730752,
            "unit": "ns/iter",
            "extra": "iterations: 12848978\ncpu: 51.29381379593345 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 62.71971107919854,
            "unit": "ns/iter",
            "extra": "iterations: 11168597\ncpu: 62.70389163473048 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 72.20247764226188,
            "unit": "ns/iter",
            "extra": "iterations: 9779055\ncpu: 72.19413716355598 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 85.39051696307368,
            "unit": "ns/iter",
            "extra": "iterations: 8257882\ncpu: 85.39103416590682 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 94.97614690817431,
            "unit": "ns/iter",
            "extra": "iterations: 7466705\ncpu: 94.94554840454727 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 112.77439670021865,
            "unit": "ns/iter",
            "extra": "iterations: 6110478\ncpu: 112.77312200452472 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 127.81886975942966,
            "unit": "ns/iter",
            "extra": "iterations: 5513552\ncpu: 127.77665087769101 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 148.0865690728215,
            "unit": "ns/iter",
            "extra": "iterations: 4779536\ncpu: 148.08083399726686 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 168.04317791799588,
            "unit": "ns/iter",
            "extra": "iterations: 4193324\ncpu: 168.01891935848099 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 69.29787438229624,
            "unit": "ns/iter",
            "extra": "iterations: 10451456\ncpu: 69.28142222480687 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 77.5167114594917,
            "unit": "ns/iter",
            "extra": "iterations: 9054655\ncpu: 77.51005466249202 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 86.41173638604074,
            "unit": "ns/iter",
            "extra": "iterations: 8144364\ncpu: 86.3845852174522 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 98.13937929874463,
            "unit": "ns/iter",
            "extra": "iterations: 7101033\ncpu: 98.13117302792146 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 111.70058954289692,
            "unit": "ns/iter",
            "extra": "iterations: 6346612\ncpu: 111.69255045053598 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 125.6692801227013,
            "unit": "ns/iter",
            "extra": "iterations: 5582646\ncpu: 125.64717734207288 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 144.01614287225811,
            "unit": "ns/iter",
            "extra": "iterations: 5033305\ncpu: 144.00793673341016 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 156.90942001047156,
            "unit": "ns/iter",
            "extra": "iterations: 4539358\ncpu: 156.87086588015254 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 178.75080496472012,
            "unit": "ns/iter",
            "extra": "iterations: 4011356\ncpu: 178.73765031077122 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 114.20033629702647,
            "unit": "ns/iter",
            "extra": "iterations: 6344986\ncpu: 114.1629595400214 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 200.50596035671586,
            "unit": "ns/iter",
            "extra": "iterations: 3521853\ncpu: 200.49149581201638 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 392.72654215457084,
            "unit": "ns/iter",
            "extra": "iterations: 1787888\ncpu: 392.51803636470777 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 828.9636372789664,
            "unit": "ns/iter",
            "extra": "iterations: 854144\ncpu: 828.9523078076127 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1853.607190941557,
            "unit": "ns/iter",
            "extra": "iterations: 347604\ncpu: 1853.3433533561476 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 4070.9056658083678,
            "unit": "ns/iter",
            "extra": "iterations: 173691\ncpu: 4070.8155575128562 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 10802.240478868647,
            "unit": "ns/iter",
            "extra": "iterations: 64987\ncpu: 10800.425931340022 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 27916.655827542796,
            "unit": "ns/iter",
            "extra": "iterations: 24633\ncpu: 27915.88880769628 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 64957.05510001245,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64957.217700003865 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}