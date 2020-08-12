window.BENCHMARK_DATA = {
  "lastUpdate": 1597245042777,
  "repoUrl": "https://github.com/ros-industrial-consortium/tesseract",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "matthew.powelson@tortugaagtech.com",
            "name": "Matthew Powelson",
            "username": "mpowelson"
          },
          "committer": {
            "email": "levi.armstrong@gmail.com",
            "name": "Levi Armstrong",
            "username": "Levi-Armstrong"
          },
          "distinct": true,
          "id": "6dee0ec05de094ba65600aa99d7d4cef88c6c6cb",
          "message": "Correctly return continuous joints as active joints",
          "timestamp": "2020-08-12T09:14:18-05:00",
          "tree_id": "fae09638b6af95813d3c569b2510967b1e742058",
          "url": "https://github.com/ros-industrial-consortium/tesseract/commit/6dee0ec05de094ba65600aa99d7d4cef88c6c6cb"
        },
        "date": 1597245041142,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_0/real_time",
            "value": 66.12466623156075,
            "unit": "us/iter",
            "extra": "iterations: 9959\ncpu: 66.11998865347927 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 66.97596185970838,
            "unit": "us/iter",
            "extra": "iterations: 9937\ncpu: 66.95699939619605 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 69.99079531421208,
            "unit": "us/iter",
            "extra": "iterations: 10201\ncpu: 69.97836800313696 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 70.91902821724118,
            "unit": "us/iter",
            "extra": "iterations: 8470\ncpu: 70.91366953955138 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 78.82580262426312,
            "unit": "us/iter",
            "extra": "iterations: 8993\ncpu: 78.78338196374953 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 95.08010048178033,
            "unit": "us/iter",
            "extra": "iterations: 7265\ncpu: 95.06795003441152 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 138.61474773168882,
            "unit": "us/iter",
            "extra": "iterations: 5070\ncpu: 138.58613353057203 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 244.9748415808754,
            "unit": "us/iter",
            "extra": "iterations: 2910\ncpu: 244.96299965635737 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 538.6189422355138,
            "unit": "us/iter",
            "extra": "iterations: 1333\ncpu: 538.6066234058512 us\nthreads: undefined"
          },
          {
            "name": "BM_CLONE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 1606.1761103610233,
            "unit": "us/iter",
            "extra": "iterations: 444\ncpu: 1605.4065765765765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.366811322759183,
            "unit": "us/iter",
            "extra": "iterations: 160120\ncpu: 4.366475081189109 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 6.665316279248852,
            "unit": "us/iter",
            "extra": "iterations: 105097\ncpu: 6.662424740953597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 42.37783665264439,
            "unit": "us/iter",
            "extra": "iterations: 16168\ncpu: 42.37684722909454 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 23.88981096528485,
            "unit": "us/iter",
            "extra": "iterations: 30095\ncpu: 23.865760857285277 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 4.883992045982751,
            "unit": "us/iter",
            "extra": "iterations: 142318\ncpu: 4.883742302449444 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 6.746643049006659,
            "unit": "us/iter",
            "extra": "iterations: 105359\ncpu: 6.743874932374077 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 4.77801421367295,
            "unit": "us/iter",
            "extra": "iterations: 143172\ncpu: 4.777386716676459 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 72.2531992312277,
            "unit": "us/iter",
            "extra": "iterations: 9366\ncpu: 72.22496263079198 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 73.84815952527941,
            "unit": "us/iter",
            "extra": "iterations: 9522\ncpu: 73.84776076454531 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.404098842714393,
            "unit": "us/iter",
            "extra": "iterations: 127799\ncpu: 5.401679465410528 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 43.19823927639217,
            "unit": "us/iter",
            "extra": "iterations: 16086\ncpu: 43.19848675867197 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 71.18762475068436,
            "unit": "us/iter",
            "extra": "iterations: 10028\ncpu: 71.15616753091368 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.5434049629847445,
            "unit": "us/iter",
            "extra": "iterations: 1274072\ncpu: 0.5433408284618128 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.5875614621957135,
            "unit": "us/iter",
            "extra": "iterations: 1182906\ncpu: 0.5875649087924153 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 12.555167459778868,
            "unit": "us/iter",
            "extra": "iterations: 56318\ncpu: 12.54906582264996 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 26.032746669613466,
            "unit": "us/iter",
            "extra": "iterations: 27099\ncpu: 26.032886231964195 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 73.28406347193626,
            "unit": "us/iter",
            "extra": "iterations: 9453\ncpu: 73.25287358510545 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.5817690750919694,
            "unit": "us/iter",
            "extra": "iterations: 1199719\ncpu: 0.5817321306072494 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.580261192607235,
            "unit": "us/iter",
            "extra": "iterations: 1143478\ncpu: 0.5802204379970609 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 76.85213866232887,
            "unit": "us/iter",
            "extra": "iterations: 9195\ncpu: 76.82002620989681 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 5.45639971077191,
            "unit": "us/iter",
            "extra": "iterations: 121703\ncpu: 5.456421871276784 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.390335913846577,
            "unit": "us/iter",
            "extra": "iterations: 130465\ncpu: 5.38886620932819 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 13.01177178619006,
            "unit": "us/iter",
            "extra": "iterations: 52889\ncpu: 13.010212218041584 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 76.30905614829267,
            "unit": "us/iter",
            "extra": "iterations: 9279\ncpu: 76.30418310162696 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 4.359213394910558,
            "unit": "us/iter",
            "extra": "iterations: 160449\ncpu: 4.358952963246889 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.2180097012897635,
            "unit": "us/iter",
            "extra": "iterations: 165545\ncpu: 4.216627207103804 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 6.55100915639041,
            "unit": "us/iter",
            "extra": "iterations: 106483\ncpu: 6.550144905759612 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 42.65085790572838,
            "unit": "us/iter",
            "extra": "iterations: 16292\ncpu: 42.64559188558793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 22.95875297628538,
            "unit": "us/iter",
            "extra": "iterations: 30491\ncpu: 22.957613033354022 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 4.753252318719471,
            "unit": "us/iter",
            "extra": "iterations: 146525\ncpu: 4.7515643269066485 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 6.698908599044004,
            "unit": "us/iter",
            "extra": "iterations: 105535\ncpu: 6.69810243047331 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 4.860613069830713,
            "unit": "us/iter",
            "extra": "iterations: 146184\ncpu: 4.858507948886322 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 73.05044025156778,
            "unit": "us/iter",
            "extra": "iterations: 9540\ncpu: 73.04228993710653 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 73.29643554155253,
            "unit": "us/iter",
            "extra": "iterations: 9510\ncpu: 73.2925385909566 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.426788091029439,
            "unit": "us/iter",
            "extra": "iterations: 131783\ncpu: 5.424156097523998 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 43.091331209026926,
            "unit": "us/iter",
            "extra": "iterations: 16162\ncpu: 43.091505321123634 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 71.49188069639014,
            "unit": "us/iter",
            "extra": "iterations: 9765\ncpu: 71.46133988735266 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.5105774727819312,
            "unit": "us/iter",
            "extra": "iterations: 1363879\ncpu: 0.5105507343393378 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.5504870551692312,
            "unit": "us/iter",
            "extra": "iterations: 1290322\ncpu: 0.5503605239622361 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 12.550145883690185,
            "unit": "us/iter",
            "extra": "iterations: 56264\ncpu: 12.547956544148922 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 25.71010695066581,
            "unit": "us/iter",
            "extra": "iterations: 26386\ncpu: 25.708627643447205 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 74.2253759162564,
            "unit": "us/iter",
            "extra": "iterations: 9550\ncpu: 74.19456931937144 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.5448820229379754,
            "unit": "us/iter",
            "extra": "iterations: 1289471\ncpu: 0.54486985670868 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.5422141398957793,
            "unit": "us/iter",
            "extra": "iterations: 1246657\ncpu: 0.5420659106715001 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 76.25730032498724,
            "unit": "us/iter",
            "extra": "iterations: 9230\ncpu: 76.24874160346683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 5.372564617854823,
            "unit": "us/iter",
            "extra": "iterations: 128432\ncpu: 5.372581529525342 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.302315346899705,
            "unit": "us/iter",
            "extra": "iterations: 132359\ncpu: 5.299461298438315 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 13.066181808168766,
            "unit": "us/iter",
            "extra": "iterations: 54442\ncpu: 13.065569064325421 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 77.33009363501652,
            "unit": "us/iter",
            "extra": "iterations: 9238\ncpu: 77.29971032691124 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 4.3685693198143,
            "unit": "us/iter",
            "extra": "iterations: 161368\ncpu: 4.368591356402775 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.3375501040612345,
            "unit": "us/iter",
            "extra": "iterations: 161444\ncpu: 4.335522249200959 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 6.454802024788517,
            "unit": "us/iter",
            "extra": "iterations: 105690\ncpu: 6.454418081180789 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 42.223828945788775,
            "unit": "us/iter",
            "extra": "iterations: 16638\ncpu: 42.204065572785275 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 22.80697131483151,
            "unit": "us/iter",
            "extra": "iterations: 30643\ncpu: 22.805756257546513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 4.8867993290676734,
            "unit": "us/iter",
            "extra": "iterations: 144575\ncpu: 4.884606398063283 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 6.61771117220165,
            "unit": "us/iter",
            "extra": "iterations: 111312\ncpu: 6.617741519333098 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 4.769021504409427,
            "unit": "us/iter",
            "extra": "iterations: 144761\ncpu: 4.7665938477905145 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 73.48367601752207,
            "unit": "us/iter",
            "extra": "iterations: 9803\ncpu: 73.4840809956141 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 73.86524672996843,
            "unit": "us/iter",
            "extra": "iterations: 9480\ncpu: 73.83166276371293 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.376563336823209,
            "unit": "us/iter",
            "extra": "iterations: 127043\ncpu: 5.376268153302379 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 42.674688384744606,
            "unit": "us/iter",
            "extra": "iterations: 16530\ncpu: 42.66455970961875 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 71.31464187410609,
            "unit": "us/iter",
            "extra": "iterations: 9882\ncpu: 71.3014338190645 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.5383718988688665,
            "unit": "us/iter",
            "extra": "iterations: 1313029\ncpu: 0.5383742476365732 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.5756248649973682,
            "unit": "us/iter",
            "extra": "iterations: 1215717\ncpu: 0.5753835045491725 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 12.639758282615137,
            "unit": "us/iter",
            "extra": "iterations: 57832\ncpu: 12.639502766634559 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 25.694653053739035,
            "unit": "us/iter",
            "extra": "iterations: 27278\ncpu: 25.684668414106852 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 73.93631624021909,
            "unit": "us/iter",
            "extra": "iterations: 9575\ncpu: 73.92585232376057 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.5867531965453836,
            "unit": "us/iter",
            "extra": "iterations: 1187532\ncpu: 0.5867213489825965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.5818954506099351,
            "unit": "us/iter",
            "extra": "iterations: 1205832\ncpu: 0.581555377531864 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 74.43891244094768,
            "unit": "us/iter",
            "extra": "iterations: 9525\ncpu: 74.43928881889764 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 5.436281297246127,
            "unit": "us/iter",
            "extra": "iterations: 126329\ncpu: 5.434510104568269 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.333868191899912,
            "unit": "us/iter",
            "extra": "iterations: 132526\ncpu: 5.332571955691757 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 12.951623432521885,
            "unit": "us/iter",
            "extra": "iterations: 53669\ncpu: 12.951707223909423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 75.6279943802106,
            "unit": "us/iter",
            "extra": "iterations: 9253\ncpu: 75.59593299470437 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 4.218629762339702,
            "unit": "us/iter",
            "extra": "iterations: 164100\ncpu: 4.218642772699601 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.31757189066775,
            "unit": "us/iter",
            "extra": "iterations: 163540\ncpu: 4.316605307570021 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 6.727567432975753,
            "unit": "us/iter",
            "extra": "iterations: 105223\ncpu: 6.727539748914255 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 42.38424202659469,
            "unit": "us/iter",
            "extra": "iterations: 16461\ncpu: 42.37581252657865 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 22.81450157562356,
            "unit": "us/iter",
            "extra": "iterations: 30464\ncpu: 22.81463465073518 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 4.805098616258998,
            "unit": "us/iter",
            "extra": "iterations: 146487\ncpu: 4.804546137199912 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 6.545142568419333,
            "unit": "us/iter",
            "extra": "iterations: 104399\ncpu: 6.545180059195987 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 4.762441688781696,
            "unit": "us/iter",
            "extra": "iterations: 145075\ncpu: 4.762207437532354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 72.33457710440638,
            "unit": "us/iter",
            "extra": "iterations: 8910\ncpu: 72.33488911335505 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 73.48542802990423,
            "unit": "us/iter",
            "extra": "iterations: 9497\ncpu: 73.45331094029713 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.367787482586024,
            "unit": "us/iter",
            "extra": "iterations: 130634\ncpu: 5.367811733545683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 43.11359393572636,
            "unit": "us/iter",
            "extra": "iterations: 16490\ncpu: 43.093553972104466 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 70.14862302302052,
            "unit": "us/iter",
            "extra": "iterations: 9990\ncpu: 70.14505525525415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.5410438735926023,
            "unit": "us/iter",
            "extra": "iterations: 1277078\ncpu: 0.5409851692692168 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.5831482530044549,
            "unit": "us/iter",
            "extra": "iterations: 1203409\ncpu: 0.5829165030342887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 12.392491484571542,
            "unit": "us/iter",
            "extra": "iterations: 57249\ncpu: 12.391148718754923 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 25.608479202103826,
            "unit": "us/iter",
            "extra": "iterations: 27623\ncpu: 25.595998334720978 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 73.76082187923656,
            "unit": "us/iter",
            "extra": "iterations: 9589\ncpu: 73.75637511732148 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.5787755679124991,
            "unit": "us/iter",
            "extra": "iterations: 1233861\ncpu: 0.5786330315975675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.5796004805120339,
            "unit": "us/iter",
            "extra": "iterations: 1134623\ncpu: 0.5794644141710446 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 75.01968064759278,
            "unit": "us/iter",
            "extra": "iterations: 9203\ncpu: 75.01509681625525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 5.5122817537868505,
            "unit": "us/iter",
            "extra": "iterations: 134543\ncpu: 5.509863872516561 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.277174383870938,
            "unit": "us/iter",
            "extra": "iterations: 132237\ncpu: 5.277210697459791 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 12.899279557506778,
            "unit": "us/iter",
            "extra": "iterations: 54690\ncpu: 12.897383013347913 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 74.95057979293826,
            "unit": "us/iter",
            "extra": "iterations: 9274\ncpu: 74.92741373732889 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_0_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 4.3785247792132145,
            "unit": "us/iter",
            "extra": "iterations: 158863\ncpu: 4.3780454101962585 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 4.497255070780168,
            "unit": "us/iter",
            "extra": "iterations: 153083\ncpu: 4.4969705519228675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 7.649965683837077,
            "unit": "us/iter",
            "extra": "iterations: 92522\ncpu: 7.649216629558324 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.4291382206437815,
            "unit": "us/iter",
            "extra": "iterations: 492459\ncpu: 1.4288033602797314 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.5857689502343708,
            "unit": "us/iter",
            "extra": "iterations: 439546\ncpu: 1.585694525715181 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 7.0704079485940845,
            "unit": "us/iter",
            "extra": "iterations: 97728\ncpu: 7.066654070481269 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 7.983664051263558,
            "unit": "us/iter",
            "extra": "iterations: 86921\ncpu: 7.983692640443664 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 43.07329190373672,
            "unit": "us/iter",
            "extra": "iterations: 15995\ncpu: 43.05278361988167 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 4.219900939943557,
            "unit": "us/iter",
            "extra": "iterations: 165435\ncpu: 4.219456620425003 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 20.533386223689767,
            "unit": "us/iter",
            "extra": "iterations: 34102\ncpu: 20.524007858776834 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 23.108637916344755,
            "unit": "us/iter",
            "extra": "iterations: 30504\ncpu: 23.106999573826716 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.514911144518299,
            "unit": "us/iter",
            "extra": "iterations: 458306\ncpu: 1.5143246673620008 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 3.8832880912521315,
            "unit": "us/iter",
            "extra": "iterations: 179280\ncpu: 3.882234638554238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7591489991732443,
            "unit": "us/iter",
            "extra": "iterations: 878374\ncpu: 0.7588311584814609 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.7852676722544031,
            "unit": "us/iter",
            "extra": "iterations: 881806\ncpu: 0.7851061718790827 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 25.629791929602128,
            "unit": "us/iter",
            "extra": "iterations: 27731\ncpu: 25.62231769499833 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.7129945691605486,
            "unit": "us/iter",
            "extra": "iterations: 401043\ncpu: 1.7125011183339358 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 20.13292489008124,
            "unit": "us/iter",
            "extra": "iterations: 32752\ncpu: 20.131934996336025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8093414024723208,
            "unit": "us/iter",
            "extra": "iterations: 879276\ncpu: 0.8090248943448913 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.7945931809132943,
            "unit": "us/iter",
            "extra": "iterations: 881731\ncpu: 0.7945579184581257 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 25.973219524056603,
            "unit": "us/iter",
            "extra": "iterations: 26726\ncpu: 25.963249607124233 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 7.981062162809362,
            "unit": "us/iter",
            "extra": "iterations: 91936\ncpu: 7.980071908719087 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 22.871000321317002,
            "unit": "us/iter",
            "extra": "iterations: 31122\ncpu: 22.864508900456354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 28.120655779875456,
            "unit": "us/iter",
            "extra": "iterations: 25658\ncpu: 28.12076666147007 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 26.93584370978974,
            "unit": "us/iter",
            "extra": "iterations: 25651\ncpu: 26.928381076760893 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 5.329302596163717,
            "unit": "us/iter",
            "extra": "iterations: 130038\ncpu: 5.328289253910409 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 4.552118145402197,
            "unit": "us/iter",
            "extra": "iterations: 156519\ncpu: 4.551381263616558 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 7.588386088254768,
            "unit": "us/iter",
            "extra": "iterations: 93590\ncpu: 7.58722584677841 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.3781820386873072,
            "unit": "us/iter",
            "extra": "iterations: 509985\ncpu: 1.378123733050954 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.5399143608934796,
            "unit": "us/iter",
            "extra": "iterations: 453391\ncpu: 1.5392083301168327 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 7.006867287336947,
            "unit": "us/iter",
            "extra": "iterations: 101181\ncpu: 7.006559472628288 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 7.94728762242003,
            "unit": "us/iter",
            "extra": "iterations: 89242\ncpu: 7.888395710539965 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 43.51946736050516,
            "unit": "us/iter",
            "extra": "iterations: 16238\ncpu: 43.51747863037274 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 4.309772542126482,
            "unit": "us/iter",
            "extra": "iterations: 163261\ncpu: 4.2588401149080966 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 20.70424834009075,
            "unit": "us/iter",
            "extra": "iterations: 33285\ncpu: 20.70167189424702 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 23.379648783925976,
            "unit": "us/iter",
            "extra": "iterations: 29768\ncpu: 23.366358404998223 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.4885819673173109,
            "unit": "us/iter",
            "extra": "iterations: 469370\ncpu: 1.488588020112081 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 3.8843219112108076,
            "unit": "us/iter",
            "extra": "iterations: 177521\ncpu: 3.8825225860603623 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7558472021024764,
            "unit": "us/iter",
            "extra": "iterations: 927768\ncpu: 0.7558505348319808 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.7859740722291835,
            "unit": "us/iter",
            "extra": "iterations: 895372\ncpu: 0.7858991112074232 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 25.688960474308875,
            "unit": "us/iter",
            "extra": "iterations: 27324\ncpu: 25.687801566388647 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.6766922454607036,
            "unit": "us/iter",
            "extra": "iterations: 416556\ncpu: 1.676408055579547 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 20.408113256746894,
            "unit": "us/iter",
            "extra": "iterations: 34903\ncpu: 20.400650201987673 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7981486630957159,
            "unit": "us/iter",
            "extra": "iterations: 877400\ncpu: 0.7981102997492554 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7842829137703312,
            "unit": "us/iter",
            "extra": "iterations: 893509\ncpu: 0.7839550659254807 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 26.420338843917744,
            "unit": "us/iter",
            "extra": "iterations: 26313\ncpu: 26.41881522441344 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 8.071542988572016,
            "unit": "us/iter",
            "extra": "iterations: 86523\ncpu: 8.068696242617388 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 22.69120825998367,
            "unit": "us/iter",
            "extra": "iterations: 30678\ncpu: 22.689690885976887 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 28.822004583804144,
            "unit": "us/iter",
            "extra": "iterations: 24652\ncpu: 28.816026610416124 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 27.302718786964135,
            "unit": "us/iter",
            "extra": "iterations: 25358\ncpu: 27.30280755580057 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 5.348573182790728,
            "unit": "us/iter",
            "extra": "iterations: 130461\ncpu: 5.348137956937401 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 4.478984465150932,
            "unit": "us/iter",
            "extra": "iterations: 154427\ncpu: 4.478545196112046 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 7.597137992027913,
            "unit": "us/iter",
            "extra": "iterations: 91585\ncpu: 7.596368368182781 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.4153465035710682,
            "unit": "us/iter",
            "extra": "iterations: 495334\ncpu: 1.4148153710426026 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.592187249703827,
            "unit": "us/iter",
            "extra": "iterations: 447221\ncpu: 1.592019247754486 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 7.204007225090935,
            "unit": "us/iter",
            "extra": "iterations: 92594\ncpu: 7.201023576041553 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 8.130956365449308,
            "unit": "us/iter",
            "extra": "iterations: 86239\ncpu: 8.1305089460683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 43.916080274513895,
            "unit": "us/iter",
            "extra": "iterations: 15883\ncpu: 43.89351772335343 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 4.296016525107053,
            "unit": "us/iter",
            "extra": "iterations: 164477\ncpu: 4.2958259148694715 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 21.088008219419454,
            "unit": "us/iter",
            "extra": "iterations: 33579\ncpu: 21.078158611036354 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 23.735753799804847,
            "unit": "us/iter",
            "extra": "iterations: 30199\ncpu: 23.734627702903513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.5099401482330381,
            "unit": "us/iter",
            "extra": "iterations: 463729\ncpu: 1.5094250974167938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 3.877217198561026,
            "unit": "us/iter",
            "extra": "iterations: 182492\ncpu: 3.87699604914183 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7708429020525778,
            "unit": "us/iter",
            "extra": "iterations: 909770\ncpu: 0.770629609681595 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8208462446921361,
            "unit": "us/iter",
            "extra": "iterations: 867066\ncpu: 0.8208020854237182 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 25.75738513316781,
            "unit": "us/iter",
            "extra": "iterations: 27336\ncpu: 25.75481292069039 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.7172130440595945,
            "unit": "us/iter",
            "extra": "iterations: 410915\ncpu: 1.71691796356911 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 20.53148408503331,
            "unit": "us/iter",
            "extra": "iterations: 34056\ncpu: 20.53069852595706 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.8242926378861927,
            "unit": "us/iter",
            "extra": "iterations: 856140\ncpu: 0.8239929287265882 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.8213174505442882,
            "unit": "us/iter",
            "extra": "iterations: 794193\ncpu: 0.8213116194677891 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 26.695396325061523,
            "unit": "us/iter",
            "extra": "iterations: 26395\ncpu: 26.67673176738115 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 8.1841796714718,
            "unit": "us/iter",
            "extra": "iterations: 82367\ncpu: 8.184218534121705 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 22.947620930382392,
            "unit": "us/iter",
            "extra": "iterations: 30654\ncpu: 22.941798068768072 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 28.60681621577932,
            "unit": "us/iter",
            "extra": "iterations: 24507\ncpu: 28.606542375647475 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 27.558289691531193,
            "unit": "us/iter",
            "extra": "iterations: 25610\ncpu: 27.55298586489675 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 5.354083579450144,
            "unit": "us/iter",
            "extra": "iterations: 131037\ncpu: 5.352960545494914 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 4.573919985737787,
            "unit": "us/iter",
            "extra": "iterations: 154260\ncpu: 4.573454654479477 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 7.664359975848864,
            "unit": "us/iter",
            "extra": "iterations: 92734\ncpu: 7.662237766083767 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.4193914173515108,
            "unit": "us/iter",
            "extra": "iterations: 496327\ncpu: 1.4192990326941812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.5762748719420525,
            "unit": "us/iter",
            "extra": "iterations: 444527\ncpu: 1.5756069282630543 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 7.172170675045452,
            "unit": "us/iter",
            "extra": "iterations: 97712\ncpu: 7.172203721139668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 8.11631775192877,
            "unit": "us/iter",
            "extra": "iterations: 86492\ncpu: 8.114798987189483 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 43.916282580376766,
            "unit": "us/iter",
            "extra": "iterations: 15362\ncpu: 43.91651230308559 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 4.271782371940345,
            "unit": "us/iter",
            "extra": "iterations: 159768\ncpu: 4.2697370374542425 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 20.709084081559755,
            "unit": "us/iter",
            "extra": "iterations: 33301\ncpu: 20.708106933725308 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 23.69570660071978,
            "unit": "us/iter",
            "extra": "iterations: 29724\ncpu: 23.68494866101395 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.5395347170082063,
            "unit": "us/iter",
            "extra": "iterations: 455454\ncpu: 1.5395445621292503 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 3.9168490934469715,
            "unit": "us/iter",
            "extra": "iterations: 177706\ncpu: 3.915126298493089 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.764552411995345,
            "unit": "us/iter",
            "extra": "iterations: 918845\ncpu: 0.7645087484831615 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.808872577773462,
            "unit": "us/iter",
            "extra": "iterations: 862275\ncpu: 0.808583193296812 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 25.991674481944887,
            "unit": "us/iter",
            "extra": "iterations: 27169\ncpu: 25.987255879863607 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.720814075522881,
            "unit": "us/iter",
            "extra": "iterations: 409150\ncpu: 1.720733806672419 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 20.51825195101099,
            "unit": "us/iter",
            "extra": "iterations: 34213\ncpu: 20.51250545114378 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8201798157654792,
            "unit": "us/iter",
            "extra": "iterations: 846205\ncpu: 0.820142238582836 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8021482859249909,
            "unit": "us/iter",
            "extra": "iterations: 772049\ncpu: 0.801840406502711 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 26.26462803357661,
            "unit": "us/iter",
            "extra": "iterations: 26454\ncpu: 26.264403228245364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 8.095646089641233,
            "unit": "us/iter",
            "extra": "iterations: 87703\ncpu: 8.094447818204527 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 22.88776953978893,
            "unit": "us/iter",
            "extra": "iterations: 30617\ncpu: 22.88787092138364 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 28.927049496461517,
            "unit": "us/iter",
            "extra": "iterations: 24527\ncpu: 28.92396681208478 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 27.258426871145513,
            "unit": "us/iter",
            "extra": "iterations: 26214\ncpu: 27.25899671931037 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_1_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 5.501250165071423,
            "unit": "us/iter",
            "extra": "iterations: 131761\ncpu: 5.500992122099683 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_BOX/real_time",
            "value": 0.21179744652903018,
            "unit": "us/iter",
            "extra": "iterations: 3325591\ncpu: 0.21173766527513938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CONE/real_time",
            "value": 3.1011702136168475,
            "unit": "us/iter",
            "extra": "iterations: 225358\ncpu: 3.1010261805660293 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_SPHERE/real_time",
            "value": 1.2462977549330392,
            "unit": "us/iter",
            "extra": "iterations: 563413\ncpu: 1.2458567995413596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CAPSULE/real_time",
            "value": 1.3508871956763993,
            "unit": "us/iter",
            "extra": "iterations: 511585\ncpu: 1.3507920365140227 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_BOX_CYLINDER/real_time",
            "value": 2.2737217101298466,
            "unit": "us/iter",
            "extra": "iterations: 308538\ncpu: 2.2727477490617667 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_BOX/real_time",
            "value": 3.8216178108201726,
            "unit": "us/iter",
            "extra": "iterations: 187504\ncpu: 3.8214447265126035 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CONE/real_time",
            "value": 3.6768908367948736,
            "unit": "us/iter",
            "extra": "iterations: 193142\ncpu: 3.6753700955773243 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_SPHERE/real_time",
            "value": 2.5974213085949844,
            "unit": "us/iter",
            "extra": "iterations: 271421\ncpu: 2.597291410760441 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CAPSULE/real_time",
            "value": 4.473518654268681,
            "unit": "us/iter",
            "extra": "iterations: 155514\ncpu: 4.473048857337547 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CONE_CYLINDER/real_time",
            "value": 5.5229585613654875,
            "unit": "us/iter",
            "extra": "iterations: 128455\ncpu: 5.522710832587238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_BOX/real_time",
            "value": 1.2978453183913332,
            "unit": "us/iter",
            "extra": "iterations: 535222\ncpu: 1.2971270426103743 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CONE/real_time",
            "value": 2.2088042777861125,
            "unit": "us/iter",
            "extra": "iterations: 318763\ncpu: 2.2086773590410695 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_SPHERE/real_time",
            "value": 0.7678982160175933,
            "unit": "us/iter",
            "extra": "iterations: 915704\ncpu: 0.7676515063819698 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CAPSULE/real_time",
            "value": 0.8323819038837103,
            "unit": "us/iter",
            "extra": "iterations: 863246\ncpu: 0.8323849632665616 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_SPHERE_CYLINDER/real_time",
            "value": 3.325137820269724,
            "unit": "us/iter",
            "extra": "iterations: 211696\ncpu: 3.324581588693201 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_BOX/real_time",
            "value": 1.4696635206968691,
            "unit": "us/iter",
            "extra": "iterations: 478178\ncpu: 1.4694795870993558 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CONE/real_time",
            "value": 3.8469931500796775,
            "unit": "us/iter",
            "extra": "iterations: 181024\ncpu: 3.846237333171197 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_SPHERE/real_time",
            "value": 0.8160178313370693,
            "unit": "us/iter",
            "extra": "iterations: 853217\ncpu: 0.8158683242364096 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CAPSULE/real_time",
            "value": 0.8161860404393411,
            "unit": "us/iter",
            "extra": "iterations: 873208\ncpu: 0.8161021829850281 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CAPSULE_CYLINDER/real_time",
            "value": 2.1791084546801667,
            "unit": "us/iter",
            "extra": "iterations: 315210\ncpu: 2.1781780590717466 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_BOX/real_time",
            "value": 1.9610435406052384,
            "unit": "us/iter",
            "extra": "iterations: 353578\ncpu: 1.9609081815044538 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CONE/real_time",
            "value": 5.200411018479677,
            "unit": "us/iter",
            "extra": "iterations: 132904\ncpu: 5.198077582315078 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_SPHERE/real_time",
            "value": 3.3629830901068867,
            "unit": "us/iter",
            "extra": "iterations: 208517\ncpu: 3.363000844055896 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CAPSULE/real_time",
            "value": 2.183989295120279,
            "unit": "us/iter",
            "extra": "iterations: 320041\ncpu: 2.1832033364474643 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_ALL_CYLINDER_CYLINDER/real_time",
            "value": 2.7952085983672346,
            "unit": "us/iter",
            "extra": "iterations: 240534\ncpu: 2.7952222139073424 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_BOX/real_time",
            "value": 0.20913384665750462,
            "unit": "us/iter",
            "extra": "iterations: 3356423\ncpu: 0.2090705203128423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CONE/real_time",
            "value": 3.082952738350413,
            "unit": "us/iter",
            "extra": "iterations: 226505\ncpu: 3.0829684951767238 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_SPHERE/real_time",
            "value": 1.2249724159387423,
            "unit": "us/iter",
            "extra": "iterations: 581749\ncpu: 1.2248168918210556 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CAPSULE/real_time",
            "value": 1.3258713587360342,
            "unit": "us/iter",
            "extra": "iterations: 527770\ncpu: 1.325680980351295 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_BOX_CYLINDER/real_time",
            "value": 2.2857008522837794,
            "unit": "us/iter",
            "extra": "iterations: 289927\ncpu: 2.282491313330632 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_BOX/real_time",
            "value": 3.772655044028226,
            "unit": "us/iter",
            "extra": "iterations: 186131\ncpu: 3.780357210781594 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CONE/real_time",
            "value": 3.6306938989420376,
            "unit": "us/iter",
            "extra": "iterations: 194622\ncpu: 3.629723618090437 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_SPHERE/real_time",
            "value": 2.5500908008318444,
            "unit": "us/iter",
            "extra": "iterations: 273753\ncpu: 2.550102092031878 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CAPSULE/real_time",
            "value": 4.342096949817525,
            "unit": "us/iter",
            "extra": "iterations: 161269\ncpu: 4.3406172606018725 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CONE_CYLINDER/real_time",
            "value": 5.519110445580793,
            "unit": "us/iter",
            "extra": "iterations: 127384\ncpu: 5.519065455630142 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_BOX/real_time",
            "value": 1.2892486933728293,
            "unit": "us/iter",
            "extra": "iterations: 551611\ncpu: 1.2890068907255494 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CONE/real_time",
            "value": 2.163559874034849,
            "unit": "us/iter",
            "extra": "iterations: 321358\ncpu: 2.162914752394508 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_SPHERE/real_time",
            "value": 0.7536857803065583,
            "unit": "us/iter",
            "extra": "iterations: 940393\ncpu: 0.7572309034626938 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CAPSULE/real_time",
            "value": 0.784319145579157,
            "unit": "us/iter",
            "extra": "iterations: 887338\ncpu: 0.7839474044839843 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_SPHERE_CYLINDER/real_time",
            "value": 3.2712789163256777,
            "unit": "us/iter",
            "extra": "iterations: 214308\ncpu: 3.271122781230854 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_BOX/real_time",
            "value": 1.4381700507666755,
            "unit": "us/iter",
            "extra": "iterations: 465461\ncpu: 1.4376146143285513 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CONE/real_time",
            "value": 3.8662217502199625,
            "unit": "us/iter",
            "extra": "iterations: 181497\ncpu: 3.866043664633596 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_SPHERE/real_time",
            "value": 0.7809986224810658,
            "unit": "us/iter",
            "extra": "iterations: 876213\ncpu: 0.7807550470034035 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CAPSULE/real_time",
            "value": 0.7782748664003012,
            "unit": "us/iter",
            "extra": "iterations: 901387\ncpu: 0.7781249241446768 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CAPSULE_CYLINDER/real_time",
            "value": 2.172455245548907,
            "unit": "us/iter",
            "extra": "iterations: 322035\ncpu: 2.1720598910056053 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_BOX/real_time",
            "value": 1.935382555317039,
            "unit": "us/iter",
            "extra": "iterations: 355627\ncpu: 1.934758241078503 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CONE/real_time",
            "value": 5.243942039476235,
            "unit": "us/iter",
            "extra": "iterations: 135368\ncpu: 5.24370570592765 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_SPHERE/real_time",
            "value": 3.3488477268444834,
            "unit": "us/iter",
            "extra": "iterations: 212480\ncpu: 3.3476498588102688 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CAPSULE/real_time",
            "value": 2.170014756483275,
            "unit": "us/iter",
            "extra": "iterations: 327246\ncpu: 2.1699182144319415 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_FIRST_CYLINDER_CYLINDER/real_time",
            "value": 2.772979973629708,
            "unit": "us/iter",
            "extra": "iterations: 252567\ncpu: 2.7718664710749668 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_BOX/real_time",
            "value": 0.21139925298511186,
            "unit": "us/iter",
            "extra": "iterations: 3350134\ncpu: 0.21138924323624492 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CONE/real_time",
            "value": 3.0813170237312013,
            "unit": "us/iter",
            "extra": "iterations: 228904\ncpu: 3.08014249204917 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_SPHERE/real_time",
            "value": 1.263410872281547,
            "unit": "us/iter",
            "extra": "iterations: 559349\ncpu: 1.2633491255012297 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CAPSULE/real_time",
            "value": 1.3892094532846928,
            "unit": "us/iter",
            "extra": "iterations: 507760\ncpu: 1.3884609677800508 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_BOX_CYLINDER/real_time",
            "value": 2.309369619586072,
            "unit": "us/iter",
            "extra": "iterations: 303485\ncpu: 2.309248124289451 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_BOX/real_time",
            "value": 3.7152938031525062,
            "unit": "us/iter",
            "extra": "iterations: 185546\ncpu: 3.7136363327691946 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CONE/real_time",
            "value": 3.6366117233808586,
            "unit": "us/iter",
            "extra": "iterations: 194449\ncpu: 3.636356921352189 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_SPHERE/real_time",
            "value": 2.608669459729366,
            "unit": "us/iter",
            "extra": "iterations: 267329\ncpu: 2.6074515709107793 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CAPSULE/real_time",
            "value": 4.372199367969689,
            "unit": "us/iter",
            "extra": "iterations: 161385\ncpu: 4.37198660346376 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CONE_CYLINDER/real_time",
            "value": 5.515392281912577,
            "unit": "us/iter",
            "extra": "iterations: 123243\ncpu: 5.513235843009299 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_BOX/real_time",
            "value": 1.3314341236901215,
            "unit": "us/iter",
            "extra": "iterations: 527610\ncpu: 1.3314407668543016 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CONE/real_time",
            "value": 2.217240295136989,
            "unit": "us/iter",
            "extra": "iterations: 310772\ncpu: 2.2168242312691753 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_SPHERE/real_time",
            "value": 0.7916245335184219,
            "unit": "us/iter",
            "extra": "iterations: 907860\ncpu: 0.7915361806886274 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CAPSULE/real_time",
            "value": 0.8349092988031149,
            "unit": "us/iter",
            "extra": "iterations: 809416\ncpu: 0.8348569598327664 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_SPHERE_CYLINDER/real_time",
            "value": 3.3187710040405114,
            "unit": "us/iter",
            "extra": "iterations: 213816\ncpu: 3.3179010597897123 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_BOX/real_time",
            "value": 1.4801887705605288,
            "unit": "us/iter",
            "extra": "iterations: 482464\ncpu: 1.4801211344266085 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CONE/real_time",
            "value": 3.8629477749034313,
            "unit": "us/iter",
            "extra": "iterations: 181273\ncpu: 3.861933807020389 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_SPHERE/real_time",
            "value": 0.9501627095687224,
            "unit": "us/iter",
            "extra": "iterations: 738420\ncpu: 0.9501127407166671 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CAPSULE/real_time",
            "value": 0.7924686919421361,
            "unit": "us/iter",
            "extra": "iterations: 875206\ncpu: 0.7921218661663698 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CAPSULE_CYLINDER/real_time",
            "value": 2.185796197753764,
            "unit": "us/iter",
            "extra": "iterations: 323230\ncpu: 2.1858030813970872 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_BOX/real_time",
            "value": 1.8586738430207006,
            "unit": "us/iter",
            "extra": "iterations: 355473\ncpu: 1.8582150458685742 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CONE/real_time",
            "value": 5.167239692479067,
            "unit": "us/iter",
            "extra": "iterations: 136187\ncpu: 5.166726464346968 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_SPHERE/real_time",
            "value": 3.361066101833803,
            "unit": "us/iter",
            "extra": "iterations: 206197\ncpu: 3.3606355039111504 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CAPSULE/real_time",
            "value": 2.144337091698957,
            "unit": "us/iter",
            "extra": "iterations: 320352\ncpu: 2.144205074418177 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_CLOSEST_CYLINDER_CYLINDER/real_time",
            "value": 2.8452111846107946,
            "unit": "us/iter",
            "extra": "iterations: 254725\ncpu: 2.844460948081389 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_BOX/real_time",
            "value": 0.21084315006853435,
            "unit": "us/iter",
            "extra": "iterations: 3374136\ncpu: 0.21081790064182013 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CONE/real_time",
            "value": 3.1102522852630368,
            "unit": "us/iter",
            "extra": "iterations: 227326\ncpu: 3.1097122502486334 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_SPHERE/real_time",
            "value": 1.2382896082797044,
            "unit": "us/iter",
            "extra": "iterations: 566220\ncpu: 1.2380045688954822 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CAPSULE/real_time",
            "value": 1.365787944372011,
            "unit": "us/iter",
            "extra": "iterations: 506867\ncpu: 1.365725642032355 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_BOX_CYLINDER/real_time",
            "value": 2.2700111127505784,
            "unit": "us/iter",
            "extra": "iterations: 305055\ncpu: 2.26904969595652 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_BOX/real_time",
            "value": 3.8021698367419154,
            "unit": "us/iter",
            "extra": "iterations: 183329\ncpu: 3.801988168811028 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CONE/real_time",
            "value": 3.6496023204750814,
            "unit": "us/iter",
            "extra": "iterations: 191340\ncpu: 3.648736996968841 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_SPHERE/real_time",
            "value": 2.5749507587832228,
            "unit": "us/iter",
            "extra": "iterations: 269774\ncpu: 2.5748262434482525 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CAPSULE/real_time",
            "value": 4.348960749051562,
            "unit": "us/iter",
            "extra": "iterations: 159028\ncpu: 4.348984046834423 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CONE_CYLINDER/real_time",
            "value": 5.491454252821585,
            "unit": "us/iter",
            "extra": "iterations: 126128\ncpu: 5.490811334517427 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_BOX/real_time",
            "value": 1.316281722353339,
            "unit": "us/iter",
            "extra": "iterations: 536940\ncpu: 1.315720672700855 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CONE/real_time",
            "value": 2.198610132832294,
            "unit": "us/iter",
            "extra": "iterations: 320404\ncpu: 2.198499372667064 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_SPHERE/real_time",
            "value": 0.7950959200028027,
            "unit": "us/iter",
            "extra": "iterations: 812427\ncpu: 0.7931864967560597 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CAPSULE/real_time",
            "value": 0.8585466031752046,
            "unit": "us/iter",
            "extra": "iterations: 831821\ncpu: 0.8585502758406057 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_SPHERE_CYLINDER/real_time",
            "value": 3.355789656152267,
            "unit": "us/iter",
            "extra": "iterations: 211140\ncpu: 3.354880785260844 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_BOX/real_time",
            "value": 1.4725161716193078,
            "unit": "us/iter",
            "extra": "iterations: 479482\ncpu: 1.4725252856207889 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CONE/real_time",
            "value": 3.911551302901313,
            "unit": "us/iter",
            "extra": "iterations: 181403\ncpu: 3.910862995650672 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_SPHERE/real_time",
            "value": 0.8445112733982505,
            "unit": "us/iter",
            "extra": "iterations: 833777\ncpu: 0.8444243280877236 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CAPSULE/real_time",
            "value": 0.8540738050941136,
            "unit": "us/iter",
            "extra": "iterations: 847096\ncpu: 0.8540352167877396 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CAPSULE_CYLINDER/real_time",
            "value": 2.218787672022024,
            "unit": "us/iter",
            "extra": "iterations: 320815\ncpu: 2.2179295263624867 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_BOX/real_time",
            "value": 1.954256451372573,
            "unit": "us/iter",
            "extra": "iterations: 362326\ncpu: 1.9541660327992443 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CONE/real_time",
            "value": 5.276739260438925,
            "unit": "us/iter",
            "extra": "iterations: 133106\ncpu: 5.274054332637259 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_SPHERE/real_time",
            "value": 3.4441061640842245,
            "unit": "us/iter",
            "extra": "iterations: 204994\ncpu: 3.4439481106763523 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CAPSULE/real_time",
            "value": 2.2225804481974256,
            "unit": "us/iter",
            "extra": "iterations: 323295\ncpu: 2.2176879227949025 us\nthreads: undefined"
          },
          {
            "name": "BM_CONTACT_TEST_2_BulletDiscreteSimpleManager_LIMITED_CYLINDER_CYLINDER/real_time",
            "value": 2.8687263990255016,
            "unit": "us/iter",
            "extra": "iterations: 247744\ncpu: 2.8684223432251295 us\nthreads: undefined"
          },
          {
            "name": "BM_SELECT_RANDOM_OBJECT/real_time",
            "value": 12.923818099428415,
            "unit": "ns/iter",
            "extra": "iterations: 54243501\ncpu: 12.917946631062742 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 51.35060360164926,
            "unit": "ns/iter",
            "extra": "iterations: 13990518\ncpu: 51.350897943879964 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 60.91242866885414,
            "unit": "ns/iter",
            "extra": "iterations: 11344626\ncpu: 60.909620114403445 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 71.96652944086513,
            "unit": "ns/iter",
            "extra": "iterations: 9795534\ncpu: 71.9396943545923 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 84.46481722580792,
            "unit": "ns/iter",
            "extra": "iterations: 8118021\ncpu: 84.46054598774514 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 94.60718045813229,
            "unit": "ns/iter",
            "extra": "iterations: 7411477\ncpu: 94.57652705391995 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 110.24518545748289,
            "unit": "ns/iter",
            "extra": "iterations: 6106655\ncpu: 110.2456804911945 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 128.93466687658955,
            "unit": "ns/iter",
            "extra": "iterations: 5456941\ncpu: 128.9216168912254 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 147.96387734710376,
            "unit": "ns/iter",
            "extra": "iterations: 4784034\ncpu: 147.91182963999807 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_SINGLE_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 167.87110316483916,
            "unit": "ns/iter",
            "extra": "iterations: 4223331\ncpu: 167.86305809324259 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 67.83627808645977,
            "unit": "ns/iter",
            "extra": "iterations: 10226890\ncpu: 67.80731796274175 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 75.45044650807222,
            "unit": "ns/iter",
            "extra": "iterations: 8135239\ncpu: 75.4484765598193 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 88.51816978882721,
            "unit": "ns/iter",
            "extra": "iterations: 7910191\ncpu: 88.50870010597693 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 98.24614173840538,
            "unit": "ns/iter",
            "extra": "iterations: 7260459\ncpu: 98.21022293494016 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 109.71593962233622,
            "unit": "ns/iter",
            "extra": "iterations: 6356719\ncpu: 109.71074952346366 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 124.98815631195845,
            "unit": "ns/iter",
            "extra": "iterations: 5462741\ncpu: 124.93094474001586 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 141.407226712181,
            "unit": "ns/iter",
            "extra": "iterations: 5061112\ncpu: 141.4046592922761 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 155.88613263701563,
            "unit": "ns/iter",
            "extra": "iterations: 4384013\ncpu: 155.85953896578852 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_VECTOR_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 173.36609122591068,
            "unit": "ns/iter",
            "extra": "iterations: 4042293\ncpu: 173.3667522369171 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_2/real_time",
            "value": 110.98555493808848,
            "unit": "ns/iter",
            "extra": "iterations: 6099870\ncpu: 110.9738264913793 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_4/real_time",
            "value": 200.3599034765876,
            "unit": "ns/iter",
            "extra": "iterations: 3488477\ncpu: 200.30122686777082 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_8/real_time",
            "value": 389.7751409463328,
            "unit": "ns/iter",
            "extra": "iterations: 1798202\ncpu: 389.7350920530549 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_16/real_time",
            "value": 822.9343114802078,
            "unit": "ns/iter",
            "extra": "iterations: 859176\ncpu: 822.6059957447737 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_32/real_time",
            "value": 1843.1516075760492,
            "unit": "ns/iter",
            "extra": "iterations: 371802\ncpu: 1843.0649350998817 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_64/real_time",
            "value": 4125.3027404746945,
            "unit": "ns/iter",
            "extra": "iterations: 170007\ncpu: 4123.574276353076 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_128/real_time",
            "value": 10756.435655959425,
            "unit": "ns/iter",
            "extra": "iterations: 67108\ncpu: 10755.965458663348 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_256/real_time",
            "value": 27715.425947841613,
            "unit": "ns/iter",
            "extra": "iterations: 24503\ncpu: 27704.811370037383 ns\nthreads: undefined"
          },
          {
            "name": "BM_SET_COLLISION_OBJECTS_TRANSFORM_MAP_BulletDiscreteSimpleManager_ACTIVE_OBJ_512/real_time",
            "value": 64303.60580002343,
            "unit": "ns/iter",
            "extra": "iterations: 10000\ncpu: 64302.16779999683 ns\nthreads: undefined"
          }
        ]
      }
    ]
  }
}