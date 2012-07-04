<?php defined('SYSPATH') or die('No direct script access');

abstract class Controller_Application extends Controller_Template{

	public $template = 'site/template';
	
	public function before(){
		parent::before();
				
		View::set_global('site_name', 'APP Periódica');
		View::set_global('description', 'APP Periódica');
		View::set_global('X_UA_Compatible', 'IE=edge,chrome=1');
		View::set_global('viewport', 'width=device-width, maximum-scale=1.0, user-scalable=yes');
		View::set_global('author', 'Fabian Carlos');
		View::set_global('reply_to', 'fabian.pow@gmail.com');
		View::set_global('keywords', 'tabela periódica, elementos quimicos');

		$this->template->content = '';
		$this->template->styles = array(
								'style'
								);
		$this->template->scripts = array(
								'general'								
								);		
		
	}


}
