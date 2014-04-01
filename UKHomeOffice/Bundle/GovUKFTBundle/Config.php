<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle;


class Config
{
    private $params;


    public function __construct($title, $theme, $breadcrumb, $sidebar=null)
    {
        $this->params = array(
        	'title' => $title,
        	'theme' => $theme,
            'breadcrumb' => $breadcrumb,
            'sidebar' => $sidebar
        );
    }


    public function getParams()
    {
    	return $this->params;
    }
}