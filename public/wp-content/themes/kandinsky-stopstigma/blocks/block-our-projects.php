<?php

$args = [
    'post_type' => 'project',
    'numberposts'      => 3,
];

$projects = get_posts($args);

if (count($projects) < 3) {
    return "no projects";
}

?>

<div class="info-row3 our-projects">
    <p class="title-block"><?php block_field('title') ?></p>
    <div class="projects-row">
        <?php foreach ($projects as $project) : ?>
            <div class="one-project-wrapper">
                <a href="<?= get_permalink($project) ?>" class="one-project">
                    <div class="one-project__image" style="background-image: url(<?= get_the_post_thumbnail_url($project) ?>);"></div>
                    <div class="one-project__info">
                        <p class="project-title"><?= get_the_title($project) ?></p>
                        <p class="project-info">
                            <?= get_the_excerpt($project) ?>
                        </p>
                    </div>
                </a>
            </div>
        <?php endforeach; ?>
    </div>
    <a href="<?php block_field('button-link') ?>" class="wrapper-button"><?php block_field('button-text') ?></a>
</div>