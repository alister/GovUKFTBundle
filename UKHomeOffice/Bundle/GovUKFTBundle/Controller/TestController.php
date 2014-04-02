<?php


namespace UKHomeOffice\Bundle\GovUKFTBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;


class TestController extends Controller
{

    public function indexAction()
    {
        $params = array();

        if($this->container->has('ft_config')) {
            $config = $this->get('ft_config');
            $params = $config->getParams();
        }
        
    	return $this->render('GovUKFTBundle:Default:index.html.twig',
    		array('ft_config' => $params)
        );
    }

}
