<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>



  <header class="header" id="header" role="banner">
    <div id="page">
    <?php if ($logo): ?>
      <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
    <?php endif; ?>

    <?php if ($site_name || $site_slogan): ?>
      <div class="header__name-and-slogan" id="name-and-slogan">
        <?php if ($site_name): ?>
          <h1 class="header__site-name" id="site-name">
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" class="header__site-link" rel="home"><span><?php print $site_name; ?></span></a>
          </h1>
        <?php endif; ?>

        <?php if ($site_slogan): ?>
          <div class="header__site-slogan" id="site-slogan"><?php print $site_slogan; ?></div>
        <?php endif; ?>
      </div>
    <?php endif; ?>

    
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <!-- <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array('links', 'inline', 'clearfix'),
          ),
          'heading' => array(
            'text' => $secondary_menu_heading,
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?> -->
        <?php print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
      </nav>
    
    <?php print render($page['header']); ?>

    <div id="p-Search">
      <input type="text" placeholder="search">
      <input type="submit" value="explore">
    </div>
    </div>
  </header>

  <div id="bar"></div>

  

  <div id="main">

  <div id="page">
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
            print "<li><span><a href='/programs'>programs</a></span></li>";
            $country = $node->field_country['und'][0]['taxonomy_term']->name ;
            print "<li><span><a href='/programs/countries/". $country ."'>". $country . "</a></span></li>"; 
          }
          // print "<li><span><a>". $title . "</a></span></li>"
        ?>
      </ul> 
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
        <ul id="infoBar">
          <li><b>Language Requirement:</b> None</li>
          <li><b>Academic Standing</b>: Sophomore or above</li>
          <li><b>GPA</b>: 2.75 or above</li>
          <li><b>Term</b>: Fall, Spring</li>
        </ul>
      <?php endif; ?>
        <?php
          // Render the sidebars to see if there's anything in them.
          $sidebar_first  = render($page['sidebar_first']);
          $sidebar_second = render($page['sidebar_second']);
        ?>

     <!--  <?php print $sidebar_second; ?> -->
  </div>
  <br>

  <div id="page">
     
    <div id="content" class="column" role="main">
      <?php print render($page['highlighted']); ?>

      

      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?> 
    </div>

    <!-- <div id="navigation">

      <?php if ($main_menu): ?>
        <nav id="main-menu" role="navigation" tabindex="-1">
          <?php
          // This code snippet is hard to modify. We recommend turning off the
          // "Main menu" on your sub-theme's settings form, deleting this PHP
          // code block, and, instead, using the "Menu block" module.
          // @see https://drupal.org/project/menu_block
          print theme('links__system_main_menu', array(
            'links' => $main_menu,
            'attributes' => array(
              'class' => array('links', 'inline', 'clearfix'),
            ),
            'heading' => array(
              'text' => t('Main menu'),
              'level' => 'h2',
              'class' => array('element-invisible'),
            ),
          )); ?>
        </nav>
      <?php endif; ?>

      <?php print render($page['navigation']); ?>

    </div> -->

    <?php if ($sidebar_first || $sidebar_second): ?>
      <aside class="sidebars">
        
        <?php
        $additon = '<input style="display:inline-block !important;" type="submit" value="save to favorites"><input style="display:inline-block !important;"type="submit" value="Apply">';
          $sidebar_first = substr($sidebar_first, 0, -11) . $additon . "</section>";
          print $sidebar_first 
        ?>

          
        
      </aside>
    <?php endif; ?>

  </div>
  </div>
  <?php print render($page['footer']); ?>



<!--<?php print render($page['bottom']); ?>  -->
