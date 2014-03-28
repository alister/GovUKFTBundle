<?php


namespace UKHomeOffice\Bundle\GovUKFTBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TestController extends Controller
{

    public function indexAction()
    {
        $config = array();

        if($this->container->has('ft_config')) {
            $config = $this->get('ft_config');            
        }
    
    	return $this->render('GovUKFTBundle:Default:index.html.twig',
    		array('ft_config' => $config->getParams())
        );
    }

}
