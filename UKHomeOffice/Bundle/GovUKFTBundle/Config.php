<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle;


class Config
{
    private $params;


    public function __construct($title, $theme)
    {
        $this->params = array(
        	'title' => $title,
        	'theme' => $theme
        );
    }


    public function getParams()
    {
    	return $this->params;
    }
}