<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle;

class Config
{
    public $param;



    public function __construct($param)
    {
        $this->param = $param;
        //echo 'this is the config class.';
        print_r($this);
    }
}