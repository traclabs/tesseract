window.BENCHMARK_DATA = {
  "lastUpdate": 1593118861879,
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
      }
    ]
  }
}