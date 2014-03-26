<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class GovUKFTBundle
{




    public function __construct()
    {
    	//
    }


    public function getPath()
    {
    	return null;
    }


    public function boot()
    {
    	//
    }

    public function build()
    {
    	//
    }


    public function setContainer()
    {	
    	//
    }


    public function getContainerExtension()
    {
    	return null;
    }


    public function getParent()
    {
    	return null;
    }

    public function getName()
    {
    	return get_class($this);
    }

}