<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle;


class Config
{
    private $params;


    public function __construct($title, $theme, $breadcrumb, $sidebar, $hide_breadcrumb, $hide_sidebar)
    {
        $this->params = array(
        	'title' => $title,
        	'theme' => $theme,
            'breadcrumb' => $breadcrumb,
            'sidebar' => $sidebar,
            'hide_breadcrumb' => $hide_breadcrumb,
            'hide_sidebar' => $hide_sidebar
        );
    }


    public function getParams()
    {
    	return $this->params;
    }
}