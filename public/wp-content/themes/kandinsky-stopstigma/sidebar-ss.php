<?php

/**
 * The sidebar containing the main widget area.
 *
 * @package storefront
 */
?>

<aside class="sidebar">
    <span class="btn-sidebar">
        <svg class="btn-icon btn-icon1">
            <use xlink:href="#close-icon"></use>
        </svg>
        <svg class="btn-icon btn-icon2">
            <use xlink:href="#burger-icon"></use>
        </svg>
    </span>
    <div class="mini-sidebar">
        <p class="sidebar-close-title">меню</p>
        <svg class="btn-icon-search">
            <use xlink:href="#search-icon"></use>
        </svg>
    </div>
    <div class="sidebar__logo">
        <a href="/">
            <picture>
                <source srcset="<?= get_stylesheet_directory_uri() . '/img/logo/logo.webp' ?>" type="image/webp">
                <source srcset="<?= get_stylesheet_directory_uri() . '/img/logo/logo.png' ?>" type="image/png">
                <img src="<?= get_stylesheet_directory_uri() . '/img/logo/logo.png' ?>" alt="">
            </picture>
        </a>
        <p class="tagline">
            Не позволяй стереотипам думать за тебя!
        </p>
    </div>
    <div class="dropdown-menu">
        <div class="sidebar__menu">
            <?php
            wp_nav_menu(
                array(
                    'menu'           => esc_html__('Main menu', 'knd'),
                    'theme_location' => 'primary',
                    'container'      => false,
                    'menu_class'     => 'sidebar__menu_inner',
                    'after'          => $after,
                )
            );
            ?>
        </div>
        <div class="sidebar__support-project">
            <a href="#">поддержать проект</a>
        </div>
        <div class="sidebar__search">
            <form class="search-form" action="">
                <input type="search" name="question" placeholder="Поиск...">
                <button type="submit" style="background-image: url(<?= get_stylesheet_directory_uri() . '/img/icons/search-icon.svg' ?>);"></button>
            </form>
        </div>
        <div class="sidebar__social-link">
            <p>Мы в социальных сетях:</p>
            <div class="social-link-list">
                <?php
                if ($social_icons = knd_social_links(array(), false)) {
                    echo $social_icons;
                }
                ?>


            </div>
        </div>
    </div>
</aside>