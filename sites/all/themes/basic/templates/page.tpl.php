<div id="page" class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <!-- ______________________ HEADER _______________________ -->

  <header id="header">
    <div class="container">

      <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" id="logo">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>"/>
        </a>
      <?php endif; ?>

      <?php if ($site_name || $site_slogan): ?>
        <div id="name-and-slogan">

          <?php if ($site_name): ?>
            <?php if ($title): ?>
              <div id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
              </div>
            <?php else: /* Use h1 when the content title is empty */ ?>
              <h1 id="site-name">
                <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home"><?php print $site_name; ?></a>
              </h1>
            <?php endif; ?>
          <?php endif; ?>

          <?php if ($site_slogan): ?>
            <div id="site-slogan"><?php print $site_slogan; ?></div>
          <?php endif; ?>

        </div>
      <?php endif; ?>

      <?php if ($main_menu || $secondary_menu): ?>
        <nav id="navigation" class="menu <?php if (!empty($main_menu)) {print "with-primary";}
          if (!empty($secondary_menu)) {print " with-secondary";} ?>">
            <?php print theme('links', array('links' => $main_menu, 'attributes' => array('id' => 'primary', 'class' => array('links', 'clearfix', 'main-menu')))); ?>
            <?php print theme('links', array('links' => $secondary_menu, 'attributes' => array('id' => 'secondary', 'class' => array('links', 'clearfix', 'sub-menu')))); ?>
        </nav> <!-- /navigation -->
      <?php endif; ?>

       <?php 
      $hamburger = $base_path . drupal_get_path( 'theme', variable_get('theme_default', '0') ) . '/images/hamburger.png';
      print '<img id="menu-toggle" src="'.$hamburger .'" height="23" width="27" alt="">';
    ?>

    <script>
      jQuery("#menu-toggle").click(function(){
jQuery("#secondary-menu").toggle();});
    </script>

      <?php if ($page['header']): ?>
        <div id="header-region">
          <?php print render($page['header']); ?>
        </div>
      <?php endif; ?>

      <div class="explore">
        <input type="text" placeholder="search">
        <input type="submit">
      </div>
      
    </div>

  </header> <!-- /header -->

  

  <!-- ______________________ MAIN _______________________ -->

  <div id="main">
      <div id="barwrapper">
        <div>
          <div id="bar" class="containsbreadcrumbs">
                <ul id="breadcrumbs">
              <?php 
                $bc = drupal_get_breadcrumb();
                foreach ($bc as $crumb) {
                  if ($crumb = '<a href="/">Home</a>'){
                    $crumb = '<a href="/"><img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-128.png" alt=""></a>';
                  }
                  print("<li><span>". $crumb . "</span></li>");
                }
                if(isset($node)){
                  if(isset($node->field_country)){
                    print "<li><span><a href='/programs'>programs</a></span></li>";
                    $country = $node->field_country['und'][0]['taxonomy_term']->name ;
                    print "<li><span><a href='/programs/countries/". $country ."'>". $country . "</a></span></li>"; 
                  }
                  else{
                  print("<li><span><a>". drupal_get_title() . "</a></span></li>");
                }
                }
                else{
                  print("<li><span><a>". drupal_get_title() . "</a></span></li>");
                }
              ?>
            </ul> 
            <input type="submit" id="togglesavedProgramDisplay" value="my favorites">
            <div id="savedProgramDisplay">
            <div id="page">
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
            </div>
            </div>
        </div>
        </div>
  </div>
    <div class="container">
      <?php if ($title): ?>
        <h1 class="title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php if ($page['precontent']): ?>
        <aside id="precontent">
          <?php print render($page['precontent']); ?>
        </aside>
      <?php endif; ?> <!-- /precontent -->
    </div>
    <div class="container">
      <section id="content">
  
          <?php if ( $messages || $tabs || $action_links): ?>
            <div id="content-header">

              <?php if ($page['highlighted']): ?>
                <div id="highlighted"><?php print render($page['highlighted']) ?></div>
              <?php endif; ?>

              <?php print render($title_prefix); ?>

              <?php print render($title_suffix); ?>
              <?php print $messages; ?>
              <?php print render($page['help']); ?>

              <?php if ($tabs): ?>
                <div class="tabs"><?php print render($tabs); ?></div>
              <?php endif; ?>

              <?php if ($action_links): ?>
                <ul class="action-links"><?php print render($action_links); ?></ul>
              <?php endif; ?>

            </div> <!-- /#content-header -->
          <?php endif; ?>

          <div id="content-area">
            <?php print render($page['content']) ?>
          </div>

          <?php print $feed_icons; ?>

      </section> <!-- /content-inner /content -->

      <?php if ($page['sidebar_first']): ?>
        <aside id="sidebar-first" class="column sidebar first">
          <?php print render($page['sidebar_first']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-first -->

      <?php if ($page['sidebar_second']): ?>
        <aside id="sidebar-second" class="column sidebar second">
          <?php print render($page['sidebar_second']); ?>
        </aside>
      <?php endif; ?> <!-- /sidebar-second -->
    </div>
  </div> <!-- /main -->

  <!-- ______________________ FOOTER _______________________ -->

  <?php if ($page['footer']): ?>
    <footer id="footer">
      <div class="container">
      <?php print render($page['footer']); ?>
      </div>
    </footer> <!-- /footer -->
  <?php endif; ?>

</div> <!-- /page -->
