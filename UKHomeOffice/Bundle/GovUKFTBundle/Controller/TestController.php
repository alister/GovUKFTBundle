<?php


namespace UKHomeOffice\Bundle\GovUKFTBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TestController extends Controller
{


    public function indexAction()
    {

    	$config = $this->get('ft_config');
    	


    	$vars = array(
    		'name' => 'Foo'
    	);

    	return $this->render('GovUKFTBundle:Default:index.html.twig',
    		array($vars));
    }

}
